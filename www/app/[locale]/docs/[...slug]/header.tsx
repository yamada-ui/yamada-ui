import type { Doc } from "#velite"
import {
  ButtonGroup,
  GithubIcon,
  Heading,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { NextLinkButton, StorybookIcon } from "@/components"
import { mdToHtml } from "@/utils/string"

export interface HeaderProps extends Doc {}

export function Header({
  style,
  description,
  source,
  storybook,
  title,
}: HeaderProps) {
  const t = useTranslations("docs")
  return (
    <VStack gap="md" mb="xl">
      <VStack gap="sm">
        <Heading size="5xl">{title}</Heading>

        <Text color="fg.emphasized">{mdToHtml(description)}</Text>
      </VStack>

      {storybook || source || style ? (
        <ButtonGroup as="nav" size="xs" variant="outline" gap="sm">
          {source ? (
            <NextLinkButton
              href={source}
              color="fg.emphasized"
              external
              startIcon={<GithubIcon />}
            >
              {t("source")}
            </NextLinkButton>
          ) : null}
          {style ? (
            <NextLinkButton
              href={style}
              color="fg.emphasized"
              external
              startIcon={<GithubIcon />}
            >
              {t("style")}
            </NextLinkButton>
          ) : null}
          {storybook ? (
            <NextLinkButton
              href={storybook}
              color="fg.emphasized"
              external
              startIcon={<StorybookIcon />}
            >
              {t("storybook")}
            </NextLinkButton>
          ) : null}
        </ButtonGroup>
      ) : null}
    </VStack>
  )
}
