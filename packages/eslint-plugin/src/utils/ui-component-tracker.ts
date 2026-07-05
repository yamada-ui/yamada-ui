// ============================================================================
// ui-component-tracker
// ----------------------------------------------------------------------------
// 「この JSX 要素は Yamada UI のコンポーネントか？」を判定するためのモジュール。
//
// ESLint はファイルを 1 パスで上から順に走査する。その走査中に
//   1. import 文を見て「Yamada UI 由来の識別子」を記録し（visitImport）
//   2. `const X = styled(...)` のような styled ファクトリ呼び出しの
//      変数宣言を見て、生成されたコンポーネント名を記録し（visitVariableDeclarator）
//   3. JSX のタグ名がその記録に含まれるかを判定する（matchesJSXName）
// という 3 ステップの状態機械として動く。
//
// ルール本体（no-hardcoded-token）はこの tracker を作り、
// ImportDeclaration / VariableDeclarator / JSXOpeningElement の各 visitor から
// 対応するメソッドを呼び出すだけでよい。
// ============================================================================

import type {
  ImportDeclaration,
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
  VariableDeclarator,
} from "estree-jsx"

// JSX のタグ名として現れうる AST ノードの型。
// - JSXIdentifier:      <Box />          → 単一の識別子
// - JSXMemberExpression: <ui.Box />      → ドットつなぎ
// - JSXNamespacedName:  <svg:path />     → XML 名前空間（今回は対象外）
type JSXTagNameExpression =
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName

// tracker が外部（ルール本体）に公開するインターフェース。
export interface UIComponentTracker {
  // JSX タグ名が「Yamada UI コンポーネント」と判定されるか
  matchesJSXName: (node: JSXTagNameExpression) => boolean
  // import 文を渡して識別子を記録させる
  visitImport: (node: ImportDeclaration) => void
  // 変数宣言を渡して styled ファクトリ由来のコンポーネントを記録させる
  visitVariableDeclarator: (node: VariableDeclarator) => void
}

// styled ファクトリの関数名。`import { styled } from "@yamada-ui/react"` の
// `styled` や、`ui.styled(...)` の `.styled` の部分を指す。
const STYLED_FACTORY_NAME = "styled"

// sourcePackages: 「Yamada UI 由来」とみなすパッケージ名のリスト。
// ルール側のデフォルトは ["@yamada-ui/react", "@workspaces/ui"]。
export function createUIComponentTracker(
  sourcePackages: readonly string[],
): UIComponentTracker {
  // <Box /> のように単独の識別子で使われるコンポーネント名の集合。
  // 例: import { Box } from "@yamada-ui/react" → "Box" を追加
  const components = new Set<string>()

  // <ui.Box /> のようにメンバーアクセスで使われる「名前空間」の集合。
  // 例: import * as ui from "@yamada-ui/react" → "ui" を追加
  // 例: import ui from "@yamada-ui/react"      → "ui" を追加（default import）
  const namespaces = new Set<string>()

  // styled ファクトリとして import されたローカル名の集合。
  // 例: import { styled } from "@yamada-ui/react"        → "styled"
  // 例: import { styled as s } from "@yamada-ui/react"   → "s"（別名も追跡できる）
  const styledFactories = new Set<string>()

  // --------------------------------------------------------------------
  // ステップ 1: import 文の解析
  // --------------------------------------------------------------------
  function visitImport(node: ImportDeclaration): void {
    // import 元のパッケージ名を取り出す（例: "@yamada-ui/react"）
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    // 対象パッケージからの import でなければ何も記録しない。
    // これにより他ライブラリの <Box /> などを誤検出しない。
    if (!sourcePackages.includes(source)) return

    // import の各指定子（{ A, B as C } / default / * as ns）を分類する
    for (const spec of node.specifiers)
      if (spec.type === "ImportSpecifier") {
        // named import: import { Box } / import { Box as MyBox }
        // imported = エクスポート側の本来の名前（"Box"）
        // spec.local.name = このファイル内でのローカル名（"MyBox"）
        const imported =
          spec.imported.type === "Identifier"
            ? spec.imported.name
            : spec.imported.value

        if (imported === STYLED_FACTORY_NAME) {
          // `styled` は「コンポーネント」ではなく「ファクトリ関数」なので
          // 別扱いにする。
          // - styledFactories: `const X = styled("div")` の callee 判定用
          // - namespaces:      `<styled.div />` のようなメンバーアクセス用
          //   （styled は namespace 的にも使えるため両方に登録する）
          namespaces.add(spec.local.name)
          styledFactories.add(spec.local.name)
        } else {
          // それ以外の named import はすべてコンポーネント名として記録。
          // 型や関数も混ざりうるが、JSX タグとして使われない限り
          // matchesJSXName に到達しないので実害はない。
          components.add(spec.local.name)
        }
      } else if (
        spec.type === "ImportDefaultSpecifier" ||
        spec.type === "ImportNamespaceSpecifier"
      ) {
        // default import（import ui from "..."）と
        // namespace import（import * as ui from "..."）はどちらも
        // <ui.Box /> の形で使われるので namespaces に記録する。
        namespaces.add(spec.local.name)
      }
  }

  // --------------------------------------------------------------------
  // ステップ 2: styled ファクトリ呼び出しの解析
  // `const MyBox = styled("div")` や `const MyBox = ui.styled("div")` を
  // 検出して、生成された変数名をコンポーネントとして登録する。
  //
  // 注意: `styled(Box)` のように既存コンポーネントを包むケースも
  // callee が styled であれば同様に登録される。ここで見ているのは
  // 「callee が styled ファクトリかどうか」だけで、引数は見ていない。
  // --------------------------------------------------------------------
  function visitVariableDeclarator(node: VariableDeclarator): void {
    // 分割代入（const { a } = ...）などは対象外。単純な識別子への代入のみ。
    if (node.id.type !== "Identifier") return
    // 初期化式が関数呼び出しでなければ対象外。
    if (node.init?.type !== "CallExpression") return

    const callee = node.init.callee

    if (callee.type === "Identifier") {
      // パターン A: `const X = styled(...)`
      // callee 名が styled ファクトリとして記録済みなら X をコンポーネント登録
      if (styledFactories.has(callee.name)) components.add(node.id.name)

      return
    }

    if (callee.type === "MemberExpression") {
      // パターン B: `const X = ui.styled(...)`
      // object（ui）が既知の namespace かつ property が "styled" のとき登録。
      // `!callee.computed` は `ui["styled"](...)` のような
      // ブラケットアクセスを除外する（computed の場合 property は
      // 動的評価になりうるため静的に判定できない）。
      const object = callee.object
      const property = callee.property
      if (
        object.type === "Identifier" &&
        namespaces.has(object.name) &&
        !callee.computed &&
        property.type === "Identifier" &&
        property.name === STYLED_FACTORY_NAME
      )
        components.add(node.id.name)
    }
  }

  // --------------------------------------------------------------------
  // ステップ 3: JSX タグ名の判定
  // --------------------------------------------------------------------
  function matchesJSXName(node: JSXTagNameExpression): boolean {
    // <Box /> のような単独識別子 → components に登録済みか
    if (node.type === "JSXIdentifier") return components.has(node.name)

    if (node.type === "JSXMemberExpression") {
      // <ui.Box /> や <ui.foo.Bar /> のようなメンバーアクセス。
      // AST 上は ((ui.foo).Bar) と左結合でネストするので、
      // 最も左（ルート）の識別子までたどる。
      let object: JSXMemberExpression["object"] = node.object

      while (object.type === "JSXMemberExpression") object = object.object

      // ルートの識別子（ui）が既知の namespace ならヒット。
      // つまり namespace 配下は「何であれ Yamada UI コンポーネント」とみなす
      // 楽観的な判定になっている。
      if (object.type === "JSXIdentifier") return namespaces.has(object.name)
    }

    // JSXNamespacedName（<svg:path />）はここに落ちて false
    return false
  }

  return { matchesJSXName, visitImport, visitVariableDeclarator }
}
