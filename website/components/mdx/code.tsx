import type { BoxProps, GridProps } from "@yamada-ui/react"
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers"
import { Box, Grid, isString, Text } from "@yamada-ui/react"
import { codeToHtml } from "shiki"
import { CopyButton } from "../copy-button"

export interface PreProps extends BoxProps {
  lang: string
}

export async function Pre({ lang, children, ...rest }: PreProps) {
  if (!isString(children)) return null

  const html = await codeToHtml(children, {
    lang,
    themes: { light: "one-light", dark: "one-dark-pro" },
    transformers: [
      transformerMetaHighlight(),
      transformerNotationDiff(),
      transformerNotationFocus(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  })
  const omittedHtml = html.replace(/^<pre[^>]*>/, "").replace(/<\/pre>$/, "")

  return (
    <Grid my="lg" position="relative">
      <Box
        as="pre"
        css={{
          "& code": {
            bg: "transparent",
            border: "none",
            color: "inherit",
            display: "inline",
            fontSize: "inherit",
            lineHeight: "inherit",
            minH: "inherit",
            p: "0",
            rounded: "inherit",
          },
          "& code .diff, & code .highlighted": {
            "--space": { base: "{spaces.lg}", md: "{spaces.md}" },
            display: "inline-block",
            mx: "calc({space} * -1)",
            position: "relative",
            px: "{space}",
            w: "calc(full + ({space} * 2))",
          },
          "& code .diff.add": {
            bg: ["green.400/15", "green.500/15"],
            _before: {
              color: "green",
              content: "'+'",
              left: { base: "sm", md: "xs" },
              position: "absolute",
            },
          },
          "& code .diff.remove": {
            bg: ["red.400/15", "red.500/15"],
            _before: {
              color: "red",
              content: "'-'",
              left: { base: "sm", md: "xs" },
              position: "absolute",
            },
          },
          "& code .highlighted": {
            bg: ["black.muted", "white.subtle"],
          },
          "& code .highlighted-word": {
            bg: ["black.muted", "white.subtle"],
            borderColor: ["black.emphasized", "white.muted"],
            borderWidth: "1px",
            m: "-1px -2px",
            p: "1px 2px",
            rounded: "l1",
          },
          "& span": {
            _dark: {
              color: "{shiki-dark}!",
            },
          },
        }}
        data-lang={lang}
        bg="bg.panel!"
        dangerouslySetInnerHTML={{ __html: omittedHtml }}
        fontFamily="mono"
        fontSize="sm"
        lineHeight="1.1"
        overflowX="auto"
        pe="13"
        ps={{ base: "lg", md: "md" }}
        py={{ base: "lg", md: "md" }}
        rounded="l2"
        {...rest}
      />
      <CopyButton
        position="absolute"
        right={{ base: "2", md: "1.5" }}
        top={{ base: "3.5", md: "1.5" }}
        value={children}
      />
    </Grid>
  )
}

export interface CodeBlockProps extends GridProps {
  lang?: string
  title?: string
}

export function CodeBlock({ lang, children, title, ...rest }: BoxProps) {
  return (
    <Grid
      css={{ "& > div": { m: "0" }, "& pre": { roundedTop: "0" } }}
      data-lang={lang}
      my="lg"
      {...rest}
    >
      <Box
        bg="bg.panel"
        borderBottomWidth="1px"
        borderColor="border.subtle"
        color="fg.emphasized"
        p="2"
        px="4"
        py="3"
        roundedTop="l2"
      >
        <Text fontFamily="mono" fontSize="sm">
          {title}
        </Text>
      </Box>
      {children}
    </Grid>
  )
}
