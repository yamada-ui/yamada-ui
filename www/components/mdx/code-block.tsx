import type { BoxProps, GridProps } from "@yamada-ui/react"
import { Box, Code, Flex, Grid, Tabs, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import React from "react"
import { codeToHtml } from "@/libs/shiki"
import { langConditions } from "@/utils/i18n"
import { CodePreview } from "../code-preview"
import { Callout } from "./callout"
import { ClientOnly } from "./client-only"
import { Iframe } from "./iframe"

export interface CodeBlockProps extends Omit<GridProps, "children"> {
  lang?: string
  children?: string
  client?: boolean
  code?: string
  functional?: boolean
  highlight?: string
  iframe?: boolean
  preview?: boolean
  title?: string
}

export function CodeBlock({
  lang = "ts",
  code,
  children = code,
  client = false,
  functional = false,
  highlight,
  iframe = false,
  preview = false,
  title,
  ...rest
}: CodeBlockProps) {
  const t = useTranslations("component.codeBlock")

  if (!children) return null

  if (preview) {
    return (
      <>
        <Tabs.Root size="sm" variant="subtle" gap="md" my="lg">
          <Tabs.List gap="sm">
            <Tabs.Tab index={0}>{t("preview")}</Tabs.Tab>
            <Tabs.Tab index={1}>{t("code")}</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel index={0} rounded="l2">
            {iframe ? (
              <Iframe borderWidth="1px" h="lg" rounded="l2">
                <Box boxSize="full" overflowX="hidden" overflowY="auto" p="lg">
                  <ClientOnly
                    lang={lang}
                    code={children}
                    functional={functional}
                  />
                </Box>
              </Iframe>
            ) : (
              <Box borderWidth="1px" overflow="hidden" p="{space}" rounded="l2">
                <ClientOnly
                  lang={lang}
                  code={children}
                  functional={functional}
                />
              </Box>
            )}
          </Tabs.Panel>
          <Tabs.Panel index={1} tabIndex={-1}>
            <Pre lang={lang} highlight={highlight}>
              {children}
            </Pre>
          </Tabs.Panel>
        </Tabs.Root>

        {client ? (
          <Callout data-type="warning">
            {t.rich("clientOnly", {
              tag: (chunks) => (
                <Code
                  css={{
                    [langConditions.ja]: {
                      mx: "1",
                      verticalAlign: "top",
                    },
                  }}
                  variant="surface"
                  verticalAlign="middle"
                >
                  {chunks}
                </Code>
              ),
            })}
          </Callout>
        ) : null}
      </>
    )
  } else if (title) {
    return (
      <Grid my="lg" {...rest}>
        <Flex
          alignItems="center"
          bg="bg.panel"
          borderBottomWidth="1px"
          borderColor="border"
          color="fg.emphasized"
          h="12"
          px="4"
          roundedTop="l2"
        >
          <Text fontFamily="mono" fontSize="sm">
            {title}
          </Text>
        </Flex>

        <Pre lang={lang} highlight={highlight} roundedTop="0">
          {children}
        </Pre>
      </Grid>
    )
  } else {
    return (
      <Pre lang={lang} highlight={highlight} my="lg">
        {children}
      </Pre>
    )
  }
}

export interface PreProps extends Omit<BoxProps, "children"> {
  lang: string
  children?: string
  code?: string
  highlight?: string
}

export async function Pre({
  lang,
  code,
  children = code,
  highlight,
  ...rest
}: PreProps) {
  if (!children) return null

  const html = await codeToHtml(children, {
    lang,
    meta: { __raw: highlight ?? "" },
  })

  return (
    <CodePreview html={html} {...rest}>
      {children}
    </CodePreview>
  )
}
