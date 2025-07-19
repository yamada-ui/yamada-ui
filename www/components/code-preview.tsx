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
  html?: string
}

export function CodePreview({
  lang,
  bg = "bg.panel",
  code,
  children = code,
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

    codeToHtml(children, { lang }).then(setHtml)
  }, [children, html, lang])

  if (!html || !children) return null

  return (
    <Grid
      minH={{ base: "16", md: "12" }}
      position="relative"
      rounded="l2"
      {...rest}
      bg="{bg}"
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
        bg="transparent!"
        dangerouslySetInnerHTML={{ __html: html }}
        fontFamily="mono"
        fontSize="sm"
        lineHeight="1.1"
        overflowX="auto"
        pe={{ base: "13", md: "11" }}
        ps="{space}"
        py="{space}"
      />
      <CopyButton
        position="absolute"
        right={{ base: "2", md: "1.5" }}
        top={{ base: "3.5", sm: "2", md: "1.5" }}
        value={children}
      />
    </Grid>
  )
}
