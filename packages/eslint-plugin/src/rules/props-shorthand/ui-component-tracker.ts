import type { TSESTree } from "@typescript-eslint/utils"

// @docs(TSESTree AST 拡張): https://typescript-eslint.io/developers/custom-rules#ast-extensions
// @docs(ノード型一覧): https://typescript-eslint.io/developers/custom-rules#node-types

export interface UIComponentTracker {
  matchesJSXName: (node: TSESTree.JSXTagNameExpression) => boolean
  visitImport: (node: TSESTree.ImportDeclaration) => void
  visitVariableDeclarator: (node: TSESTree.VariableDeclarator) => void
}

const STYLED_FACTORY_NAME = "styled"

export function createUIComponentTracker(
  sourcePackages: readonly string[],
): UIComponentTracker {
  // 「そのまま <Foo /> で使われるコンポーネント名」を入れる
  // import { Box } from "@yamada-ui/react" → "Box"
  // import { Box as B } → "B"
  // import { HStack, VStack } → "HStack", "VStack"
  const components = new Set<string>()

  // 「Foo.X の左端の基底名として使われる」識別子を入れる
  // matchesJSXName で <Foo.X />（= JSXMemberExpression）の左端 JSXIdentifier と照合します。
  // namespaces に入る条件は 2 パターン:
  // 1. styled factory の import（named import 限定の特別扱い）
  // import { styled } → "styled"
  // import { styled as s } → "s"
  // 2. default / namespace import（パッケージ全体を 1 つの名前に束ねる形）
  // import * as Y from "@yamada-ui/react" → "Y"
  // import YamadaUI from "@yamada-ui/react" → "YamadaUI"
  const namespaces = new Set<string>()

  // 「styled factory として呼び出せる識別子」を入れる
  // visitVariableDeclarator で `const X = styled(Box)` の callee と照合します。
  // namespaces とは別扱い：
  //  - import * as Y / import YamadaUI は namespaces には入るが、これ単体は呼び出し ≠ wrap なので入らない
  //  - import { styled } / import { styled as s } のみが入る（local 名）
  // import { styled }       → "styled"
  // import { styled as s }  → "s"
  const styledFactories = new Set<string>()

  // 1 つの import 文（例: import { Box } from "@yamada-ui/react"）を表す AST ノード
  // ESLint が各 import 文を見つけるたびにこの関数を呼ぶ
  function visitImport(node: TSESTree.ImportDeclaration): void {
    // import 元の文字列リテラル。必ず Literal ノード（テンプレートリテラルや動的式は不可）
    // source.value が文字列でパッケージ名/相対パスが入ります
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    if (!sourcePackages.includes(source)) return

    // specifiers[]: import の 個々の項目 の配列。型は 3 種類あり、書き方で分かれます
    for (const spec of node.specifiers) {
      // 1. ImportSpecifier — 名前付き import の各項目
      // spec.imported は通常 Identifier。`import { "str-name" as X }` の形式のときだけ Literal
      // spec.local は実際にコード中で使われる名前（as の右側、なければ imported と同じ）
      // import {  Box   as   B  } from "@yamada-ui/react"
      //           ↑          ↑
      //           imported   local
      //        (元の名前)  (自分のコードで使う名前)
      // as を書かない場合は、imported と local に同じ名前が入ります
      if (spec.type === "ImportSpecifier") {
        // ケース 1: import { Box as B } — 通常の名前付き import
        // ImportSpecifier {
        //   imported: Identifier { name: "Box" },     // ← クォートなし、JS の識別子ルール内
        //   local:    Identifier { name: "B"   },
        // }

        // ケース 2: import { "str-name" as X } — 文字列リテラル名 import
        // ImportSpecifier {
        //   imported: Literal { value: "str-name", raw: '"str-name"' },  // ← クォートで囲まれた値
        //   local:    Identifier { name: "X" },
        // }
        const imported =
          spec.imported.type === "Identifier"
            ? spec.imported.name
            : spec.imported.value

        if (imported === STYLED_FACTORY_NAME) {
          // import { styled } / import { styled as s }
          // styled factory は <styled.div /> のように namespace 形式で使われるので namespaces 側へ
          namespaces.add(spec.local.name)
          // 同じ factory が `const X = styled(Box)` の形で wrapper 変数を作る用途にも使われるため、
          // 呼び出し検出用に styledFactories にも登録する（matchesJSXName からは見ない）
          styledFactories.add(spec.local.name)
        } else {
          // import { Box } / import { Box as B } / import { HStack, VStack }
          // 通常の名前付き import は <Box /> のようにそのまま使われるので components 側へ
          components.add(spec.local.name)
        }
      } else if (
        // ここからは { } で囲まない import 形式（パッケージ全体を 1 つの名前にまとめる書き方）
        // 2. ImportDefaultSpecifier — import YamadaUI from "@yamada-ui/react"
        // 3. ImportNamespaceSpecifier — import * as Y from "@yamada-ui/react"
        spec.type === "ImportDefaultSpecifier" ||
        spec.type === "ImportNamespaceSpecifier"
      ) {
        // 必ず <Y.X /> 形式で参照されるので namespaces 側へ
        namespaces.add(spec.local.name)
      }
    }
  }

  // 変数宣言 1 件（`const X = init` の片側ぶん）を表す AST ノード
  // ESLint が `const A = 1, B = styled(Box)` のように複数並んでいても、各宣言ごとに呼ばれる
  //
  // ここで拾いたいのは「styled factory で wrap したコンポーネント変数」だけ:
  //   const Wrapped = styled(Box)
  //   const Wrapped = s(Box)            // import { styled as s }
  //   const Wrapped = Y.styled(Box)     // import * as Y / default import
  // これらの左辺 (Wrapped) を components に登録して、<Wrapped /> を Yamada UI 由来として扱う
  //
  // 検出しないケース（AST だけでは安全に判定できないので意図的に外す）:
  //   const Wrapped = withFoo(styled(Box))  // 関数経由の indirection
  //   { const styled = otherThing; const X = styled(Box) }  // スコープ shadowing
  function visitVariableDeclarator(node: TSESTree.VariableDeclarator): void {
    // `const { Wrapped } = ...` のような分割代入は対象外（左辺が単一の識別子に限定）
    if (node.id.type !== "Identifier") return
    // `const Wrapped` のような初期化子なしや、`const Wrapped = styled` のような呼び出しでない形は対象外
    if (!node.init || node.init.type !== "CallExpression") return

    const callee = node.init.callee

    // ケース 1: `const Wrapped = styled(Box)` / `const Wrapped = s(Box)`
    // styled factory を named import で取り込んだローカル名を直接呼んでいるパターン
    if (callee.type === "Identifier") {
      if (styledFactories.has(callee.name)) {
        components.add(node.id.name)
      }
      return
    }

    // ケース 2: `const Wrapped = Y.styled(Box)` / `const Wrapped = YamadaUI.styled(Box)`
    // namespace import / default import 経由で styled factory を呼んでいるパターン
    // - callee.object が namespaces に入っている識別子
    // - callee.property が "styled"（computed: false なので静的にプロパティ名が判定できる）
    if (
      callee.type === "MemberExpression" &&
      !callee.computed &&
      callee.object.type === "Identifier" &&
      namespaces.has(callee.object.name) &&
      callee.property.type === "Identifier" &&
      callee.property.name === STYLED_FACTORY_NAME
    ) {
      components.add(node.id.name)
    }
  }

  // JSX タグの名前部分（例: <Box /> の "Box"、<styled.div /> の "styled.div"）を表す AST ノード
  // Yamada UI 由来のコンポーネントかどうかを判定して返す
  function matchesJSXName(node: TSESTree.JSXTagNameExpression): boolean {
    // JSXIdentifier — 単一の識別子で書かれているケース
    // 例: <Box />、<HStack />（visitImport で components に入れた名前と直接照合）
    if (node.type === "JSXIdentifier") {
      return components.has(node.name)
    }

    // JSXMemberExpression — ドットで繋がれているケース
    // 例: <styled.div />、<Y.Box />、<A.B.C />
    // 入れ子になることがあり、<A.B.C /> は左に伸びるツリーになる:
    //   JSXMemberExpression {
    //     object: JSXMemberExpression {
    //       object: JSXIdentifier "A",   // ← 左端
    //       property: JSXIdentifier "B",
    //     },
    //     property: JSXIdentifier "C",
    //   }
    if (node.type === "JSXMemberExpression") {
      let object: TSESTree.JSXMemberExpression["object"] = node.object

      // 左端の識別子に辿り着くまで .object を辿る
      // <A.B.C /> なら node.object → node.object.object → JSXIdentifier "A" まで降りる
      while (object.type === "JSXMemberExpression") {
        object = object.object
      }

      // 左端が識別子なら、それが namespaces に登録された名前かを判定
      // 例: <styled.div /> の "styled"、<Y.Box /> の "Y"
      if (object.type === "JSXIdentifier") {
        return namespaces.has(object.name)
      }
    }

    // それ以外は対象外（例: <svg:circle /> のような JSXNamespacedName）
    return false
  }

  return { matchesJSXName, visitImport, visitVariableDeclarator }
}
