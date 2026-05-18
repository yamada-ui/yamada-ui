import { RuleTester } from "@typescript-eslint/rule-tester"
import { afterAll, describe, it } from "vitest"
import { propsShorthand } from "./index"

// RuleTester は test ランナーに依存しない設計になっているため、
// 使う側で `afterAll` / `describe` / `it` を差し込む必要がある
// ここでは vitest の関数をそのまま渡している
// @docs(vitest 連携): https://typescript-eslint.io/packages/rule-tester#vitest
RuleTester.afterAll = afterAll
RuleTester.describe = describe
RuleTester.it = it

// RuleTester のインスタンスを作成
// JSX を含むコードを解析するため、parserOptions で ecmaFeatures.jsx を true にする
// @docs(constructor options): https://typescript-eslint.io/packages/rule-tester#ruletester-constructor-options
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
})

// ruleTester.run(ルール名, ルール本体, { valid, invalid })
// valid: 指摘が出ないはずのケース
// invalid: 指摘が出るはずのケース（errors と、自動修正があれば output を指定）
// @docs(valid 用オプション): https://typescript-eslint.io/packages/rule-tester#valid-test-case-options
// @docs(invalid 用オプション): https://typescript-eslint.io/packages/rule-tester#invalid-test-case-options
ruleTester.run("props-shorthand", propsShorthand, {
  valid: [
    // preferred: "shorthand" で shorthand prop が書かれていれば指摘なし
    {
      name: "shorthand preferred: shorthand prop passes",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    // Yamada UI 由来でない要素（<div /> など）は対象外
    {
      name: "non-UI element is ignored",
      code: `const App = () => <div margin={1} />`,
      options: [{ preferred: "shorthand" }],
    },
    // preferred: "longhand" で longhand prop が書かれていれば指摘なし
    {
      name: "longhand preferred: longhand prop passes",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "longhand" }],
    },
    // エイリアス付き import（Box as B）でも追跡できる
    {
      name: "aliased import is tracked",
      code: `
        import { Box as B } from "@yamada-ui/react"
        const App = () => <B m={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    // spread 属性（{...props}）は静的に判定できないので対象外
    {
      name: "spread attributes are ignored",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = (props) => <Box {...props} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    // スタイル以外の prop（onClick など）は shorthand/longhand 判定の対象外
    {
      name: "non-style prop is ignored",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box onClick={() => {}} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    // sourcePackages に含まれないパッケージ（同名コンポーネントを含む別ライブラリ）は対象外
    {
      name: "imports from other packages are ignored",
      code: `
        import { Box } from "@some/other-lib"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    // namespace import 経由（<Y.Box />）でも、属性がなければ何も指摘しない
    {
      name: "namespace import: tracked member access without attributes passes",
      code: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.Box />
      `,
      options: [{ preferred: "shorthand" }],
    },
  ],
  invalid: [
    // preferred: shorthand で longhand "margin" が書かれている → "m" への自動修正を期待
    {
      name: "longhand margin -> shorthand m",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box margin={1} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [
        {
          messageId: "preferShorthand",
          data: { shorthand: "m", longhand: "margin" },
        },
      ],
    },
    // 別 prop の例: flexDirection → flexDir（複数文字 shorthand の代表例）
    {
      name: "flexDirection -> flexDir",
      code: `
        import { HStack } from "@yamada-ui/react"
        const App = () => <HStack flexDirection="row" />
      `,
      output: `
        import { HStack } from "@yamada-ui/react"
        const App = () => <HStack flexDir="row" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // ui factory 経由（<ui.div />）でも検出と自動修正が効く
    {
      name: "ui factory: padding -> p",
      code: `
        import { ui } from "@yamada-ui/react"
        const App = () => <ui.div padding="2" />
      `,
      output: `
        import { ui } from "@yamada-ui/react"
        const App = () => <ui.div p="2" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // ui factory をエイリアス（ui as u）で取り込んでも、元の名前で判定できている
    {
      name: "ui factory alias: import { ui as u }",
      code: `
        import { ui as u } from "@yamada-ui/react"
        const App = () => <u.div padding="2" />
      `,
      output: `
        import { ui as u } from "@yamada-ui/react"
        const App = () => <u.div p="2" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // namespace import（import * as Y）経由でも、左端の基底 "Y" が追跡対象として識別される
    {
      name: "namespace import: <Y.Box margin={1} />",
      code: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.Box margin={1} />
      `,
      output: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.Box m={1} />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // preferred: longhand 設定では shorthand → longhand へ修正される（逆方向）
    {
      name: "longhand preferred: m -> margin",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "longhand" }],
      errors: [{ messageId: "preferLonghand" }],
    },
    // preferred: shorthand 設定で shorthand と longhand が両方ある場合
    // → どちらを残すべきかは人間判断なので output: null（自動修正なし）
    {
      name: "shorthand preferred: duplicate shorthand + longhand: no auto-fix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} margin={2} />
      `,
      output: null,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "duplicateProps" }],
    },
    // preferred: longhand 設定でも同様（両方ある場合は自動修正しない）
    {
      name: "longhand preferred: duplicate shorthand + longhand: no auto-fix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} margin={2} />
      `,
      output: null,
      options: [{ preferred: "longhand" }],
      errors: [{ messageId: "duplicateProps" }],
    },
    // preferred: longhand で、同じ longhand（backgroundImage）に紐づく shorthand 兄弟
    // （bgGradient と bgImage）が同居 → 両方とも duplicate として指摘、自動修正なし
    // errors が 2 個あるのは、各兄弟が独立に duplicate を報告するため
    {
      name: "longhand preferred: sibling shorthands sharing a longhand: no auto-fix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bgGradient="x" bgImage="y" />
      `,
      output: null,
      options: [{ preferred: "longhand" }],
      errors: [
        { messageId: "duplicateProps" },
        { messageId: "duplicateProps" },
      ],
    },
  ],
})
