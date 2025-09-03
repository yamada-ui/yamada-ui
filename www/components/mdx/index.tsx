import type { MDXComponents, MDXContent } from "mdx/types"
import {
  Blockquote,
  Box,
  Code,
  List,
  NativeTable,
  Text,
} from "@yamada-ui/react"
import { Suspense, useMemo } from "react"
import * as runtime from "react/jsx-runtime"
import { langConditions } from "@/utils/i18n"
import { AtRulePropsTable } from "./at-rule-props-table"
import { Callout } from "./callout"
import { Card, CardGroup } from "./card"
import { CodeBlock } from "./code-block"
import { CodeGroup } from "./code-group"
import { ComponentList } from "./component-list"
import { ConditionPropsTable } from "./condition-props-table"
import { Contributors } from "./contributors"
import { H1, H2, H3, H4, H5, H6 } from "./heading"
import { HookList } from "./hook-list"
import { Link } from "./link"
import { PropsTable } from "./props-table"
import { SemanticTokensTable } from "./semantic-tokens-table"
import { Sponsors } from "./sponsors"
import { Steps } from "./steps"
import { StylePropsTable } from "./style-props-table"
import { TokensPreview } from "./tokens-preview"
import { TokensTable } from "./tokens-table"

const mdxComponents: MDXComponents = {
  a: Link,
  AtRulePropsTable,
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
  ComponentList,
  ConditionPropsTable,
  Contributors,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  HookList,
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
  PropsTable: (props) => (
    <Suspense>
      <PropsTable {...props} />
    </Suspense>
  ),
  SemanticTokensTable,
  Sponsors,
  steps: Steps,
  strong: (props) => (
    <Text as="strong" color="fg" fontWeight="semibold" {...props} />
  ),
  StylePropsTable,
  table: (props) => (
    <Box my="lg">
      <NativeTable.Root
        variant="outline"
        border="none"
        withScrollArea
        scrollAreaProps={{
          borderWidth: "1px",
          rounded: "l2",
          whiteSpace: { base: "inherit", md: "nowrap" },
        }}
        {...props}
      />
    </Box>
  ),
  tbody: (props) => <NativeTable.Tbody {...props} />,
  td: (props) => (
    <NativeTable.Td color="fg.emphasized" fontSize="sm" {...props} />
  ),
  tfoot: (props) => <NativeTable.Tfoot {...props} />,
  th: (props) => (
    <NativeTable.Th
      fontSize="sm"
      textAlign="start"
      whiteSpace="nowrap"
      {...props}
    />
  ),
  thead: (props) => <NativeTable.Thead {...props} />,
  TokensPreview,
  TokensTable,
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
