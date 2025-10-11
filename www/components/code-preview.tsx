"use client"

import type { GridProps } from "@yamada-ui/react"
import { Box, Grid, useInjectVarsIntoProps } from "@yamada-ui/react"
import { useLayoutEffect, useState } from "react"
import { codeToHtml } from "@/libs/shiki"
import { CopyButton } from "./copy-button"

export interface CodePreviewProps extends Omit<GridProps, "children"> {
  lang?: string
  children?: string
  code?: string
  highlight?: string
  html?: string
}

export function CodePreview({
  lang,
  bg = "bg.panel",
  code,
  children = code,
  highlight,
  html: htmlProp,
  ...props
}: CodePreviewProps) {
  const rest = useInjectVarsIntoProps(
    { bg, ...props },
    {
      background: "bg",
      backgroundColor: "bg",
      bg: "bg",
      bgColor: "bg",
    },
  )
  const [html, setHtml] = useState<string | undefined>(htmlProp)

  useLayoutEffect(() => {
    if (html || !children || !lang) return

    codeToHtml(children, { lang, meta: { __raw: highlight ?? "" } }).then(
      setHtml,
    )
  }, [children, highlight, html, lang])

  if (!html || !children) return null

  return (
    <Grid {...rest} bg="{bg}" position="relative" rounded="l2">
      <Box
        maxH={{ base: "lg", md: "md" }}
        minH={{ base: "16", md: "12" }}
        overflowY="auto"
      >
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
              w: "calc(full + ({space} * 4))",
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
              bg: ["black.400/15", "white.500/15"],
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
          bg="transparent!"
          dangerouslySetInnerHTML={{ __html: html }}
          fontFamily="mono"
          fontSize="sm"
          lineHeight="1.1"
          overflowX="auto"
          pe={{ base: "16", sm: "12", md: "14" }}
          ps="{space}"
          py="{space}"
          rounded="l2"
          tabIndex={0}
        />
      </Box>

      <CopyButton
        position="absolute"
        right={{ base: "3.5", sm: "2", md: "3" }}
        top={{ base: "3.5", md: "2" }}
        value={children}
      />
    </Grid>
  )
}
