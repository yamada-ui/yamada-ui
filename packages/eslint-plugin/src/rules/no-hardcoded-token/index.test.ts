import { RuleTester } from "eslint"
import { noHardcodedToken } from "./index"

RuleTester.describe = describe
RuleTester.it = test

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
})

ruleTester.run("no-hardcoded-token", noHardcodedToken, {
  valid: [
    {
      // 数値のトークン参照（spaces/sizes は数値リテラルを検査しない）
      name: "numeric token reference (spaces/sizes skip numeric)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={4} />
      `,
    },
    {
      // 既存のトークン名（検出パターンに一致しないため素通し）
      name: "existing token name (doesn't match detection pattern)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontSize="md" />
      `,
    },
    {
      // トークンスケールを持たない prop は検査されない
      name: "prop has no token scale",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box display="flex" />
      `,
    },
    {
      // UI コンポーネントではない要素（import なし）は検査されない
      name: "non-UI component (no import)",
      code: `const App = () => <div p="14px" />`,
    },
    {
      // CSS 関数（calc）はスキップされる
      name: "CSS function (calc)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="calc(100% - 16px)" />
      `,
    },
    {
      // CSS 変数（var）はスキップされる
      name: "CSS variable",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="var(--custom)" />
      `,
    },
    {
      // 動的な値（変数参照）は検査されない
      name: "dynamic value",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={someVar} />
      `,
    },
    {
      // 式入りのテンプレートリテラルは検査されない
      name: "template literal with expressions",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={\`\${size}rem\`} />
      `,
    },
    {
      // ゼロ値はスキップされる
      name: "zero value",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0" />
      `,
    },
    {
      // CSS グローバルキーワード（inherit）はスキップされる
      name: "CSS keyword",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="inherit" />
      `,
    },
    {
      // ignoreScales オプションで除外したスケールは検査されない
      name: "ignored scale",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="#ff0000" />
      `,
      options: [{ ignoreScales: ["colors"] }],
    },
    {
      // 単位なしの文字列 "4" は検出パターンに一致しない
      name: "string '4' doesn't match detection pattern (no unit)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="4" />
      `,
    },
    {
      // 負の数値トークン参照（mt={-4}）は正当な書き方
      name: "negative token reference (numeric)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box mt={-4} />
      `,
    },
    {
      // borderWidth はトークンスケールを持たないため検査されない
      name: "borderWidth has no token scale",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box borderWidth="2px" />
      `,
    },
    {
      // スペースを含む複合値（色 2 つの一括指定）はスキップされる
      name: "space-containing compound value (2 colors)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box scrollbarColor="#000 #fff" />
      `,
    },
    {
      // keyframes スケールは検出対象から除外されている
      name: "keyframes scale is excluded from detection",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box animationName="slidein" />
      `,
    },
    {
      // rem 単位付きのゼロ値もスキップされる
      name: "zero value with rem unit",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0rem" />
      `,
    },
    {
      // em 単位付きのゼロ値もスキップされる
      name: "zero value with em unit",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0em" />
      `,
    },
  ],
  invalid: [
    {
      // spaces: rem 値を数値キーのトークンへ fix
      name: "spaces: rem value to numeric token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0.25rem" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={1} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
      ],
    },
    {
      // spaces: `=` 前後に空白があっても安全に fix できる
      name: "spaces: rem value to numeric token with whitespace around equals",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p = "0.25rem" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p = {1} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
      ],
    },
    {
      // fontSizes: rem 値を文字列キーのトークンへ fix
      name: "fontSizes: rem value to string token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontSize="0.75rem" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontSize="xs" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.75rem", prop: "fontSize", token: '"xs"' },
        },
      ],
    },
    {
      // colors: hex カラーをカラートークンへ fix
      name: "colors: hex color",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="#e2edfd" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="blue.50" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "#e2edfd", prop: "color", token: '"blue.50"' },
        },
      ],
    },
    {
      // radii: 9999px を full トークンへ fix
      name: "radii: 9999px to full",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box rounded="9999px" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box rounded="full" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "9999px", prop: "rounded", token: '"full"' },
        },
      ],
    },
    {
      // fontWeight: 文字列 "700" を bold へ fix
      name: "fontWeight: string 700 to bold",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontWeight="700" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontWeight="bold" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "700", prop: "fontWeight", token: '"bold"' },
        },
      ],
    },
    {
      // fontWeight: 数値リテラル 700 も bold へ fix
      name: "fontWeight: numeric literal 700 to bold",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontWeight={700} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontWeight={"bold"} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "700", prop: "fontWeight", token: '"bold"' },
        },
      ],
    },
    {
      // borders: 複合値 "1px solid" をトークンへ fix
      name: "borders: compound value",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box border="1px solid" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box border="sm" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "1px solid", prop: "border", token: '"sm"' },
        },
      ],
    },
    {
      // durations: animationDuration の時間値をトークンへ fix
      name: "durations: animationDuration",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box animationDuration="200ms" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box animationDuration="moderate" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "200ms",
            prop: "animationDuration",
            token: '"moderate"',
          },
        },
      ],
    },
    {
      // durations: transitionDuration の時間値をトークンへ fix
      name: "durations: transitionDuration",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box transitionDuration="200ms" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box transitionDuration="moderate" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "200ms",
            prop: "transitionDuration",
            token: '"moderate"',
          },
        },
      ],
    },
    {
      // easings: cubic-bezier をイージングトークンへ fix
      name: "easings: transitionTimingFunction",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box transitionTimingFunction="cubic-bezier(0.25, 0, 0.25, 1)" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box transitionTimingFunction="ease" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "cubic-bezier(0.25, 0, 0.25, 1)",
            prop: "transitionTimingFunction",
            token: '"ease"',
          },
        },
      ],
    },
    {
      // letterSpacings: 負の em 値でもトークンキーが文字列なら fix できる
      name: "letterSpacings: negative em value with string token key",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box letterSpacing="-0.05em" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box letterSpacing="tighter" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "-0.05em",
            prop: "letterSpacing",
            token: '"tighter"',
          },
        },
      ],
    },
    {
      // lineHeights: 数値文字列 "1.5" をトークンへ fix
      name: "lineHeights: numeric string to token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box lineHeight="1.5" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box lineHeight="moderate" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "1.5",
            prop: "lineHeight",
            token: '"moderate"',
          },
        },
      ],
    },
    {
      // lineHeights: 数値リテラル 1.5 もトークンへ fix
      name: "lineHeights: numeric literal to token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box lineHeight={1.5} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box lineHeight={"moderate"} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "1.5",
            prop: "lineHeight",
            token: '"moderate"',
          },
        },
      ],
    },
    {
      // zIndices: 数値文字列 "9999" をトークンへ fix
      name: "zIndices: numeric string to token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box zIndex="9999" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box zIndex="beerus" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "9999", prop: "zIndex", token: '"beerus"' },
        },
      ],
    },
    {
      // aspectRatios: 分数 "16 / 9" をトークンへ fix
      name: "aspectRatios: fraction to token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box aspectRatio="16 / 9" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box aspectRatio="wide" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "16 / 9",
            prop: "aspectRatio",
            token: '"wide"',
          },
        },
      ],
    },
    {
      // spaces: 1px は文字列キーの px トークンへ fix
      name: "spaces: 1px to px token",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="1px" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="px" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "1px", prop: "p", token: '"px"' },
        },
      ],
    },
    {
      // 一致するトークンなし: fix せず報告のみ（noHardcodedTokenNoFix）
      name: "no matching token: noHardcodedTokenNoFix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="14px" />
      `,
      output: null,
      errors: [
        {
          messageId: "noHardcodedTokenNoFix",
          data: { value: "14px", prop: "p", scale: "spaces" },
        },
      ],
    },
    {
      // 一致するカラートークンなし: fix せず報告のみ
      name: "no matching color token: noHardcodedTokenNoFix",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="#123456" />
      `,
      output: null,
      errors: [
        {
          messageId: "noHardcodedTokenNoFix",
          data: { value: "#123456", prop: "color", scale: "colors" },
        },
      ],
    },
    {
      // レスポンシブ配列: 各要素が個別に検出・fix される（エラー 2 件）
      name: "responsive array (2 errors)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={["0.25rem", "0.5rem"]} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={[1, 2]} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
        {
          messageId: "noHardcodedToken",
          data: { value: "0.5rem", prop: "p", token: "{2}" },
        },
      ],
    },
    {
      // 三項演算子: 両分岐が個別に検出・fix される（エラー 2 件）
      name: "conditional expression (2 errors)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={cond ? "0.25rem" : "0.5rem"} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={cond ? 1 : 2} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
        {
          messageId: "noHardcodedToken",
          data: { value: "0.5rem", prop: "p", token: "{2}" },
        },
      ],
    },
    {
      // レスポンシブオブジェクト: 各値が個別に検出・fix される（エラー 2 件）
      name: "responsive object (2 errors)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={{ base: "0.25rem", md: "0.5rem" }} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={{ base: 1, md: 2 }} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
        {
          messageId: "noHardcodedToken",
          data: { value: "0.5rem", prop: "p", token: "{2}" },
        },
      ],
    },
    {
      // 式なしテンプレートリテラル: 数値キーのトークンへ fix
      name: "template literal without expressions (numeric token)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={\`0.25rem\`} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={1} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
      ],
    },
    {
      // 式なしテンプレートリテラル: 文字列キーのトークンへ fix
      name: "template literal without expressions (string token)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color={\`#e2edfd\`} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color={"blue.50"} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "#e2edfd", prop: "color", token: '"blue.50"' },
        },
      ],
    },
    {
      // 省略形 prop（bg）も正式名と同じスケールで検出される
      name: "shorthand prop: bg",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bg="#e2edfd" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bg="blue.50" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "#e2edfd", prop: "bg", token: '"blue.50"' },
        },
      ],
    },
    {
      // 大文字の hex も小文字に正規化して照合される
      name: "hex uppercase normalized",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="#E2EDFD" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="blue.50" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "#E2EDFD", prop: "color", token: '"blue.50"' },
        },
      ],
    },
    {
      // 負の CSS 値 -0.25rem: 数値キートークンのため fix せず報告のみ
      name: "negative CSS value: -0.25rem (noHardcodedTokenNoFix)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box mt="-0.25rem" />
      `,
      output: null,
      errors: [
        {
          messageId: "noHardcodedTokenNoFix",
          data: { value: "-0.25rem", prop: "mt", scale: "spaces" },
        },
      ],
    },
    {
      // 負の CSS 値 -1rem: 数値キートークンのため fix せず報告のみ
      name: "negative CSS value: -1rem (noHardcodedTokenNoFix)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box mt="-1rem" />
      `,
      output: null,
      errors: [
        {
          messageId: "noHardcodedTokenNoFix",
          data: { value: "-1rem", prop: "mt", scale: "spaces" },
        },
      ],
    },
    {
      // rgb 構文: theme の blackAlpha 値と一致すれば fix される
      name: "rgb syntax: blackAlpha",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bg="rgb(0, 0, 0/ .05)" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bg="blackAlpha.50" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "rgb(0, 0, 0/ .05)",
            prop: "bg",
            token: '"blackAlpha.50"',
          },
        },
      ],
    },
    {
      // rgb 構文: theme の whiteAlpha 値と一致すれば fix される
      name: "rgb syntax: whiteAlpha",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bg="rgb(255, 255, 255/ .05)" />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box bg="whiteAlpha.50" />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: {
            value: "rgb(255, 255, 255/ .05)",
            prop: "bg",
            token: '"whiteAlpha.50"',
          },
        },
      ],
    },
    {
      // 16px に一致する spaces トークンはない（4px 刻みのため）: 報告のみ
      name: "16px has no matching spaces token (noHardcodedTokenNoFix)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="16px" />
      `,
      output: null,
      errors: [
        {
          messageId: "noHardcodedTokenNoFix",
          data: { value: "16px", prop: "p", scale: "spaces" },
        },
      ],
    },
    {
      // namespace import 経由の <Y.Box /> も検出される
      name: "namespace import",
      code: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.Box p="0.25rem" />
      `,
      output: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.Box p={1} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
      ],
    },
    {
      // styled ファクトリでラップしたコンポーネントも検出される
      name: "styled factory wrapper",
      code: `
        import { Box, styled } from "@yamada-ui/react"
        const StyledBox = styled(Box)
        const App = () => <StyledBox p="0.25rem" />
      `,
      output: `
        import { Box, styled } from "@yamada-ui/react"
        const StyledBox = styled(Box)
        const App = () => <StyledBox p={1} />
      `,
      errors: [
        {
          messageId: "noHardcodedToken",
          data: { value: "0.25rem", prop: "p", token: "{1}" },
        },
      ],
    },
  ],
})
