"use client"

import type { Doc } from "@/.velite"
import type { Direction } from "@yamada-ui/react"
import {
  ButtonGroup,
  CheckIcon,
  ChevronDownIcon,
  Menu,
  useBreakpointValue,
  useClipboard,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { CONSTANTS } from "@/constants"
import { getLang } from "@/utils/i18n"
import { ChatgptIcon } from "./chatgpt-icon"
import { ClaudeIcon } from "./claude-icon"
import { MarkdownIcon } from "./markdown-icon"

export function useLlmsUrls(locale: string, pathname: string) {
  const t = useTranslations("component.llmsButtonGroup")
  const lang = getLang(locale)
  const query = encodeURIComponent(
    t("query", {
      url: `${CONSTANTS.SNS.HOMEPAGE}/${lang}${pathname}.md`,
    }),
  )

  return {
    chatgptUrl: `https://chatgpt.com/?q=${query}`,
    claudeUrl: `https://claude.ai/new?q=${query}`,
    markdownUrl: `/${getLang(locale)}${pathname}.md`,
  }
}

export interface LlmsButtonGroupProps
  extends ButtonGroup.RootProps,
    Pick<Doc, "locale" | "md" | "pathname"> {}

export function LlmsButtonGroup({
  md,
  locale,
  pathname,
  ...rest
}: LlmsButtonGroupProps) {
  const placement = useBreakpointValue<Direction>({
    base: "end-end",
    sm: "end-center",
  })
  const t = useTranslations("component.llmsButtonGroup")
  const { copied, onCopy } = useClipboard(md, 4000)
  const { chatgptUrl, claudeUrl, markdownUrl } = useLlmsUrls(locale, pathname)

  return (
    <ButtonGroup.Root
      size={{ base: "sm", sm: "xs" }}
      variant="outline"
      attached
      {...rest}
    >
      <ButtonGroup.Item
        color="fg.emphasized"
        startIcon={
          copied ? (
            <CheckIcon color="fg.muted" fontSize="xl" />
          ) : (
            <MarkdownIcon color="fg.muted" fontSize="xl" />
          )
        }
        onClick={onCopy}
      >
        {t("copyPage")}
      </ButtonGroup.Item>

      <Menu.Root placement={placement}>
        <Menu.Trigger>
          <ButtonGroup.IconItem
            icon={<ChevronDownIcon color="fg.muted" />}
            roundedLeft="0"
          />
        </Menu.Trigger>

        <Menu.Content color="fg.emphasized">
          <Menu.Item as="a" href={markdownUrl} rel="noopener" target="_blank">
            <Menu.Indicator>
              <MarkdownIcon color="fg.muted" />
            </Menu.Indicator>
            {t("markdown")}
          </Menu.Item>

          <Menu.Item as="a" href={chatgptUrl} rel="noopener" target="_blank">
            <Menu.Indicator>
              <ChatgptIcon color="fg.muted" />
            </Menu.Indicator>
            {t("chatgpt")}
          </Menu.Item>

          <Menu.Item as="a" href={claudeUrl} rel="noopener" target="_blank">
            <Menu.Indicator>
              <ClaudeIcon color="fg.muted" />
            </Menu.Indicator>
            {t("claude")}
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </ButtonGroup.Root>
  )
}
