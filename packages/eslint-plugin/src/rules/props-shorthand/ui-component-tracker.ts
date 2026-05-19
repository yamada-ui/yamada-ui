import type { TSESTree } from "@typescript-eslint/utils"

// @docs(TSESTree AST 拡張): https://typescript-eslint.io/developers/custom-rules#ast-extensions
// @docs(ノード型一覧): https://typescript-eslint.io/developers/custom-rules#node-types

export interface UIComponentTracker {
  matchesJSXName: (node: TSESTree.JSXTagNameExpression) => boolean
  visitImport: (node: TSESTree.ImportDeclaration) => void
}

const UI_FACTORY_NAME = "ui"

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
  // 1. ui factory の import（named import 限定の特別扱い）
  // import { ui } → "ui"
  // import { ui as u } → "u"
  // 2. default / namespace import（パッケージ全体を 1 つの名前に束ねる形）
  // import * as Y from "@yamada-ui/react" → "Y"
  // import YamadaUI from "@yamada-ui/react" → "YamadaUI"
  const namespaces = new Set<string>()

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

        if (imported === UI_FACTORY_NAME) {
          // import { ui } / import { ui as u }
          // ui factory は <ui.div /> のように namespace 形式で使われるので namespaces 側へ
          namespaces.add(spec.local.name)
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

  // JSX タグの名前部分（例: <Box /> の "Box"、<ui.div /> の "ui.div"）を表す AST ノード
  // Yamada UI 由来のコンポーネントかどうかを判定して返す
  function matchesJSXName(node: TSESTree.JSXTagNameExpression): boolean {
    // JSXIdentifier — 単一の識別子で書かれているケース
    // 例: <Box />、<HStack />（visitImport で components に入れた名前と直接照合）
    if (node.type === "JSXIdentifier") {
      return components.has(node.name)
    }

    // JSXMemberExpression — ドットで繋がれているケース
    // 例: <ui.div />、<Y.Box />、<A.B.C />
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
      // 例: <ui.div /> の "ui"、<Y.Box /> の "Y"
      if (object.type === "JSXIdentifier") {
        return namespaces.has(object.name)
      }
    }

    // それ以外は対象外（例: <svg:circle /> のような JSXNamespacedName）
    return false
  }

  return { matchesJSXName, visitImport }
}
