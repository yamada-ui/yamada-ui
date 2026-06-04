import { RuleTester } from "eslint"
import { propsShorthand } from "./index"

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
      name: "namespace import: tracked member access without attributes passes",
      code: `
        import * as Y from "@yamada-ui/react"
        const App = () => <Y.Box />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "sources: explicit list without @yamada-ui/react opts the default out",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "shorthand", sources: ["@my/ui"] }],
    },
    {
      name: "sources: package not listed is ignored",
      code: `
        import { Box } from "@my/ui"
        const App = () => <Box margin={1} />
      `,
      options: [{ preferred: "shorthand" }],
    },
    {
      name: "typed: true silently falls back when parserServices.program is unavailable",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      options: [{ preferred: "shorthand", typed: true }],
    },
    {
      name: "typed: false disables typed matcher",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      options: [{ preferred: "shorthand", typed: false }],
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
      errors: [
        {
          messageId: "duplicateProps",
          data: { a: "m", b: "margin", longhand: "margin" },
        },
      ],
    },
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
    {
      name: "sources: custom package name",
      code: `
        import { Box } from "@my/ui"
        const App = () => <Box margin={1} />
      `,
      output: `
        import { Box } from "@my/ui"
        const App = () => <Box m={1} />
      `,
      options: [{ preferred: "shorthand", sources: ["@my/ui"] }],
      errors: [{ messageId: "preferShorthand" }],
    },
    {
      name: "sources: path alias",
      code: `
        import { Box } from "@/components/ui"
        const App = () => <Box margin={1} />
      `,
      output: `
        import { Box } from "@/components/ui"
        const App = () => <Box m={1} />
      `,
      options: [
        {
          preferred: "shorthand",
          sources: ["@yamada-ui/react", "@/components/ui"],
        },
      ],
      errors: [{ messageId: "preferShorthand" }],
    },
    {
      name: "sources: relative path",
      code: `
        import { Box } from "./ui"
        const App = () => <Box margin={1} />
      `,
      output: `
        import { Box } from "./ui"
        const App = () => <Box m={1} />
      `,
      options: [
        {
          preferred: "shorthand",
          sources: ["@yamada-ui/react", "./ui"],
        },
      ],
      errors: [{ messageId: "preferShorthand" }],
    },
    {
      name: "sources: mixed sources still lint @yamada-ui/react when listed",
      code: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box margin={1} />
      `,
      output: `
        import { Box } from "@yamada-ui/react"
        const App = () => <Box m={1} />
      `,
      options: [
        {
          preferred: "shorthand",
          sources: ["@yamada-ui/react", "@/components/ui"],
        },
      ],
      errors: [{ messageId: "preferShorthand" }],
    },
  ],
})
