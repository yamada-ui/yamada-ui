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
      name: "numeric token reference (spaces/sizes skip numeric)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={4} />
      `,
    },
    {
      name: "existing token name (doesn't match detection pattern)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box fontSize="md" />
      `,
    },
    {
      name: "prop has no token scale",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box display="flex" />
      `,
    },
    {
      name: "non-UI component (no import)",
      code: `const App = () => <div p="14px" />`,
    },
    {
      name: "CSS function (calc)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="calc(100% - 16px)" />
      `,
    },
    {
      name: "CSS variable",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="var(--custom)" />
      `,
    },
    {
      name: "dynamic value",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p={someVar} />
      `,
    },
    {
      name: "zero value",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0" />
      `,
    },
    {
      name: "CSS keyword",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="inherit" />
      `,
    },
    {
      name: "ignored scale",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box color="#ff0000" />
      `,
      options: [{ ignoreScales: ["colors"] }],
    },
    {
      name: "string '4' doesn't match detection pattern (no unit)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="4" />
      `,
    },
    {
      name: "negative token reference (numeric)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box mt={-4} />
      `,
    },
    {
      name: "borderWidth has no token scale",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box borderWidth="2px" />
      `,
    },
    {
      name: "space-containing compound value (2 colors)",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box scrollbarColor="#000 #fff" />
      `,
    },
    {
      name: "keyframes scale is excluded from detection",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box animationName="slidein" />
      `,
    },
    {
      name: "zero value with rem unit",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0rem" />
      `,
    },
    {
      name: "zero value with em unit",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box p="0em" />
      `,
    },
  ],
  invalid: [
    {
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
