import type { MDXComponents, MDXContent } from "mdx/types"
import {
  Blockquote,
  Box,
  Code,
  Heading,
  List,
  NativeTable,
  Text,
} from "@yamada-ui/react"
import { useMemo } from "react"
import * as runtime from "react/jsx-runtime"
import { langConditions } from "@/utils/i18n"
import { Callout } from "./callout"
import { Card, CardGroup } from "./card"
import { CodeBlock } from "./code-block"
import { CodeGroup } from "./code-group"
import { Contributors } from "./contributors"
import { Link } from "./link"
import { Sponsors } from "./sponsors"
import { Steps } from "./steps"

const mdxComponents: MDXComponents = {
  a: Link,
  blockquote: (props) => (
    <Blockquote.Root css={{ "& p": { m: "0" } }} my="md" {...props} />
  ),
  callout: Callout,
  card: Card,
  "card-group": CardGroup,
  code: (props) => (
    <Code
      css={{
        [langConditions.ja]: {
          mx: "1",
          verticalAlign: "top",
        },
      }}
      variant="surface"
      verticalAlign="middle"
      {...props}
    />
  ),
  "code-group": CodeGroup,
  Contributors,
  h1: (props) => (
    <Heading
      size="5xl"
      color="fg"
      mb="md"
      mt="xl"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      size="3xl"
      color="fg"
      mb="md"
      mt="xl"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      size="2xl"
      color="fg"
      mb="md"
      mt="lg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      size="xl"
      color="fg"
      mb="md"
      mt="lg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h5: (props) => (
    <Heading
      size="lg"
      color="fg"
      my="md"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  h6: (props) => (
    <Heading
      size="md"
      color="fg"
      my="md"
      scrollMarginTop="{header-height}"
      {...props}
    />
  ),
  li: (props) => (
    <List.Item
      css={{ "& p": { m: 0 } }}
      color="fg.emphasized"
      fontSize="sm"
      {...props}
    />
  ),
  ol: (props) => <List.Root my="md" styleType="decimal" {...props} />,
  p: (props) => <Text color="fg.emphasized" fontSize="sm" my="md" {...props} />,
  pre: CodeBlock,
  Sponsors,
  steps: Steps,
  strong: (props) => (
    <Text as="strong" color="fg" fontWeight="semibold" {...props} />
  ),
  table: (props) => (
    <Box borderWidth="1px" my="lg" overflow="hidden" rounded="l2">
      <NativeTable.Root variant="outline" border="none" {...props} />
    </Box>
  ),
  tbody: (props) => <NativeTable.Tbody {...props} />,
  td: (props) => (
    <NativeTable.Td color="fg.emphasized" fontSize="sm" {...props} />
  ),
  tfoot: (props) => <NativeTable.Tfoot {...props} />,
  th: (props) => <NativeTable.Th fontSize="sm" textAlign="start" {...props} />,
  thead: (props) => <NativeTable.Thead {...props} />,
  tr: (props) => <NativeTable.Tr {...props} />,
  ul: (props) => <List.Root my="md" styleType="disc" {...props} />,
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
    <Box
      lineHeight="1.8"
      position="relative"
      zIndex="0"
      _lastChild={{ mb: "0" }}
    >
      <Content components={{ ...mdxComponents, ...components }} />
    </Box>
  ) : null
}
