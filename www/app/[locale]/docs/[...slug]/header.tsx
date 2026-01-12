import type { Doc } from "#velite"
import {
  ButtonGroup,
  GithubIcon,
  Heading,
  HStack,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { LlmsButtonGroup, NextLinkButton, StorybookIcon } from "@/components"
import { mdToHtml } from "@/utils/string"

export interface HeaderProps extends Doc {}

export function Header({
  style,
  md,
  description,
  locale,
  pathname,
  source,
  storybook,
  title,
}: HeaderProps) {
  const t = useTranslations("docs")

  return (
    <VStack gap="md" mb="xl">
      <VStack gap="sm">
        <HStack w="full">
          <Heading
            size="5xl"
            flex="1"
            lineClamp={{ base: md ? 1 : 9999, sm: 9999 }}
          >
            {title}
          </Heading>
          {md ? (
            <LlmsButtonGroup
              md={md}
              display={{ base: "flex", sm: "none" }}
              locale={locale}
              pathname={pathname}
            />
          ) : null}
        </HStack>

        <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
          {mdToHtml(description)}
        </Text>
      </VStack>

      {md ? (
        <LlmsButtonGroup
          md={md}
          display={{ base: "none", sm: "flex" }}
          locale={locale}
          pathname={pathname}
        />
      ) : null}

      {storybook || source || style ? (
        <ButtonGroup.Root as="nav" size="xs" variant="outline" gap="sm">
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
        </ButtonGroup.Root>
      ) : null}
    </VStack>
  )
}
