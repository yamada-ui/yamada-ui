import { RuleTester } from "@typescript-eslint/rule-tester"
import { afterAll, describe, it } from "vitest"
import { propsShorthand } from "./index"

RuleTester.afterAll = afterAll
RuleTester.describe = describe
RuleTester.it = it

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
})

ruleTester.run("props-shorthand", propsShorthand, {
  valid: [
    {
      name: "shorthand preferred: shorthand prop passes",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "non-UI element is ignored",
      code: `const App = () => <div margin={1} />`,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "longhand preferred: longhand prop passes",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "longhand" }],
    },
    {
      name: "aliased import is tracked",
      code: `
        import { Box as B } from "@yamada-ui/react"
        const App = () => <B m={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "spread attributes are ignored",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = (props) => <Box {...props} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "non-style prop is ignored",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box onClick={() => {}} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "imports from other packages are ignored",
      code: `
        import { Box } from "@some/other-lib"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "namespace import: non-style-prop access is silently allowed (regression snapshot)",
      code: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.useDisclosure />
      `,
      options: [{ preferred: "shorthand" }],
    },
  ],
  invalid: [
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
  ],
})
