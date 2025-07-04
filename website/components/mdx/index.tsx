import type { MDXComponents, MDXContent } from "mdx/types"
import {
  Blockquote,
  Box,
  Code,
  Grid,
  Heading,
  List,
  NativeTable,
  Text,
} from "@yamada-ui/react"
import * as components from "@yamada-ui/react"
import { useMemo } from "react"
import * as runtime from "react/jsx-runtime"
import { NextLink } from "../next-link"
import { Callout } from "./callout"
import { CodeBlock, Pre } from "./code"

const mdxComponents: MDXComponents = {
  ...(components as unknown as MDXComponents),
  a: (props) => (
    <NextLink
      css={{ "&[data-fragment]": { textDecoration: "none" } }}
      variant="underline"
      color="inherit"
      {...props}
    />
  ),
  blockquote: (props) => <Blockquote.Root {...props} />,
  callout: Callout,
  code: (props) => <Code variant="surface" verticalAlign="middle" {...props} />,
  "code-block": CodeBlock,
  h1: (props) => (
    <Heading
      size="5xl"
      color="fg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      size="3xl"
      color="fg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      size="2xl"
      color="fg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      size="xl"
      color="fg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h5: (props) => (
    <Heading
      size="lg"
      color="fg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h6: (props) => (
    <Heading
      size="md"
      color="fg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  li: (props) => <List.Item color="fg.emphasized" {...props} />,
  ol: (props) => <List.Root styleType="decimal" {...props} />,
  p: (props) => <Text color="fg.emphasized" {...props} />,
  pre: Pre,
  strong: (props) => (
    <Text as="strong" color="fg" fontWeight="semibold" {...props} />
  ),
  table: (props) => (
    <Box borderWidth="1px" overflow="hidden" rounded="l2">
      <NativeTable.Root variant="outline" border="none" {...props} />
    </Box>
  ),
  tbody: (props) => <NativeTable.Tbody {...props} />,
  td: (props) => <NativeTable.Td color="fg.emphasized" {...props} />,
  tfoot: (props) => <NativeTable.Tfoot {...props} />,
  th: (props) => <NativeTable.Th textAlign="start" {...props} />,
  thead: (props) => <NativeTable.Thead {...props} />,
  tr: (props) => <NativeTable.Tr {...props} />,
  ul: (props) => <List.Root styleType="disc" {...props} />,
}

function getContent(code?: string): MDXContent | null {
  try {
    if (!code) return null

    const fn = new Function(code)

    return fn({ ...runtime })?.default
  } catch {
    return null
  }
}

export interface MDXContentProps {
  code: string
  components?: MDXComponents
}

export function MDXContent({ code, components }: MDXContentProps) {
  const Content = useMemo(() => getContent(code), [code])

  return Content ? (
    <Grid>
      <Content components={{ ...mdxComponents, ...components }} />
    </Grid>
  ) : null
}
