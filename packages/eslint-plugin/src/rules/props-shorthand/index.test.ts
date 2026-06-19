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
    // styled wrapper 変数（const Wrapped = styled(Box)）も追跡対象に入るので、
    // 既に shorthand が書かれていれば指摘なし
    {
      name: "styled wrapper variable: shorthand prop passes",
      code: `
        import { Box, styled } from "@yamada-ui/react"
        const Wrapped = styled(Box)
        const App = () => <Wrapped m={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    // 未知の関数で wrap した変数は Yamada UI 由来として扱わないので対象外
    {
      name: "wrapper from unknown factory is ignored",
      code: `
        import { Box } from "@yamada-ui/react"
        const Wrapped = withSomething(Box)
        const App = () => <Wrapped margin={1} />
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
    // styled factory 経由（<styled.div />）でも検出と自動修正が効く
    {
      name: "styled factory: padding -> p",
      code: `
        import { styled } from "@yamada-ui/react"
        const App = () => <styled.div padding="2" />
      `,
      output: `
        import { styled } from "@yamada-ui/react"
        const App = () => <styled.div p="2" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // styled factory をエイリアス（styled as s）で取り込んでも、元の名前で判定できている
    {
      name: "styled factory alias: import { styled as s }",
      code: `
        import { styled as s } from "@yamada-ui/react"
        const App = () => <s.div padding="2" />
      `,
      output: `
        import { styled as s } from "@yamada-ui/react"
        const App = () => <s.div p="2" />
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
    // data には実際に JSX に書かれた属性名 2 つと、共通する longhand 名を渡す
    // 1 タグ・1 longhand あたり 1 回だけ報告する
    {
      name: "shorthand preferred: duplicate shorthand + longhand: no auto-fix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} margin={2} />
      `,
      output: null,
      options: [{ preferred: "shorthand" }],
      errors: [
        {
          messageId: "duplicateProps",
          data: { a: "m", b: "margin", longhand: "margin" },
        },
      ],
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
      errors: [
        {
          messageId: "duplicateProps",
          data: { a: "m", b: "margin", longhand: "margin" },
        },
      ],
    },
    // preferred: longhand で、同じ longhand（backgroundImage）に紐づく shorthand 兄弟
    // （bgGradient と bgImage）が同居 → duplicate として指摘、自動修正なし
    // メッセージには実際に書かれた属性名 2 つを並べ、書かれていない名前は出さない
    {
      name: "longhand preferred: sibling shorthands sharing a longhand: no auto-fix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bgGradient="x" bgImage="y" />
      `,
      output: null,
      options: [{ preferred: "longhand" }],
      errors: [
        {
          messageId: "duplicateProps",
          data: { a: "bgGradient", b: "bgImage", longhand: "backgroundImage" },
        },
      ],
    },
    // preferred: shorthand 設定でも、同じ longhand を共有する shorthand 兄弟が
    // 同居していれば duplicate として指摘する（preferred: longhand 側と対になる挙動）
    // どちらを残すかは人間の判断に委ねるので自動修正なし
    {
      name: "shorthand preferred: sibling shorthands sharing a longhand: no auto-fix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bgGradient="x" bgImage="y" />
      `,
      output: null,
      options: [{ preferred: "shorthand" }],
      errors: [
        {
          messageId: "duplicateProps",
          data: { a: "bgGradient", b: "bgImage", longhand: "backgroundImage" },
        },
      ],
    },
    // styled wrapper 変数の属性に longhand が書かれていれば、Box などと同じく shorthand へ自動修正される
    {
      name: "styled wrapper variable: padding -> p",
      code: `
        import { Box, styled } from "@yamada-ui/react"
        const Wrapped = styled(Box)
        const App = () => <Wrapped padding="2" />
      `,
      output: `
        import { Box, styled } from "@yamada-ui/react"
        const Wrapped = styled(Box)
        const App = () => <Wrapped p="2" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // styled factory を local alias `s` 経由で呼んだ wrapper 変数も同様に検出する
    {
      name: "styled wrapper variable via alias `s`: padding -> p",
      code: `
        import { Box, styled as s } from "@yamada-ui/react"
        const Wrapped = s(Box)
        const App = () => <Wrapped padding="2" />
      `,
      output: `
        import { Box, styled as s } from "@yamada-ui/react"
        const Wrapped = s(Box)
        const App = () => <Wrapped p="2" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // namespace import 経由（Y.styled(...)）で wrap した変数も検出する
    {
      name: "styled wrapper via namespace import: Y.styled(Y.Box)",
      code: `
        import * as Y from "@yamada-ui/react"
        const Wrapped = Y.styled(Y.Box)
        const App = () => <Wrapped padding="2" />
      `,
      output: `
        import * as Y from "@yamada-ui/react"
        const Wrapped = Y.styled(Y.Box)
        const App = () => <Wrapped p="2" />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
    // チェーンした wrap（前段の wrapper を更に wrap）でも、末端まで追跡できている
    {
      name: "styled wrapper: chained wrapping is tracked",
      code: `
        import { Box, styled } from "@yamada-ui/react"
        const First = styled(Box)
        const Second = styled(First)
        const App = () => <Second margin={1} />
      `,
      output: `
        import { Box, styled } from "@yamada-ui/react"
        const First = styled(Box)
        const Second = styled(First)
        const App = () => <Second m={1} />
      `,
      options: [{ preferred: "shorthand" }],
      errors: [{ messageId: "preferShorthand" }],
    },
  ],
})
