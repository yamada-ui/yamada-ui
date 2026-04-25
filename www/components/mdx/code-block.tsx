import type { GridProps } from "@yamada-ui/react"
import {
  Box,
  Code,
  Spacer,
  Tabs,
  CodeBlock as YamadaCodeBlock,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import React from "react"
import { StackBlitzButton } from "@/components/stack-blitz-button"
import { langConditions } from "@/utils/i18n"
import { Callout } from "./callout"
import { ClientOnly } from "./client-only"
import { Iframe } from "./iframe"

export interface CodeBlockProps extends Omit<GridProps, "children"> {
  children?: string
  client?: boolean
  code?: string
  functional?: boolean
  highlight?: string
  iframe?: boolean
  lang?: string
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

  const renderCode = ({ title: titleProp }: { title?: string } = {}) => (
    <YamadaCodeBlock.Root
      {...rest}
      code={children}
      highlight={highlight}
      language={lang}
      my="lg"
      showLanguageLabel={false}
      title={titleProp}
    >
      {titleProp ? (
        <YamadaCodeBlock.Header>
          <YamadaCodeBlock.Title />
          <YamadaCodeBlock.Control>
            <YamadaCodeBlock.CopyTrigger />
          </YamadaCodeBlock.Control>
        </YamadaCodeBlock.Header>
      ) : null}
      <YamadaCodeBlock.Content position="relative">
        <YamadaCodeBlock.CopyTrigger
          position="absolute"
          right={{ base: "3.5", sm: "2", md: "3" }}
          top={{ base: "3.5", md: "2" }}
          zIndex="1"
        />
        <YamadaCodeBlock.Code pe={{ base: "16", sm: "12", md: "14" }} />
      </YamadaCodeBlock.Content>
    </YamadaCodeBlock.Root>
  )

  if (!children) return null

  if (preview) {
    return (
      <>
        <Tabs.Root size="sm" variant="subtle" gap="md" my="lg">
          <Tabs.List gap="sm">
            <Tabs.Tab index={0}>{t("preview")}</Tabs.Tab>
            <Tabs.Tab index={1}>{t("code")}</Tabs.Tab>

            <Spacer />

            {lang === "tsx" ? (
              <StackBlitzButton
                size={{ base: "sm", md: "xs" }}
                variant="ghost"
                client={client}
                code={children}
                color={{ base: "fg.muted", _hover: "colorScheme.fg" }}
                disableRipple
                functional={functional}
              />
            ) : null}
          </Tabs.List>

          <Tabs.Panel index={0} rounded="l2">
            {iframe ? (
              <Iframe borderWidth="1px" h="lg" overflow="hidden" rounded="l2">
                <ClientOnly
                  lang={lang}
                  code={children}
                  functional={functional}
                />
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
            {renderCode()}
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
    return renderCode({ title })
  } else {
    return renderCode()
  }
}
