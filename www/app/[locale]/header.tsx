import {
  ButtonGroup,
  GithubIcon,
  HStack,
  Separator,
  Spacer,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import { DiscordIcon, LogoIcon, NextLinkIconButton } from "@/components"
import { CONSTANTS } from "@/constants"
import { ColorModeButton } from "./color-mode-button"
import { LangButton } from "./lang-button"
import { MobileMenu } from "./mobile-menu"
import { NavMenu } from "./nav-menu"
import { Search } from "./search"

export function Header() {
  const t = useTranslations()

  const items = useMemo(() => {
    return [
      { href: "/docs", label: t("component.header.docs") },
      { href: "/icons", label: t("component.header.icons") },
      { href: "/themes", label: t("component.header.themes") },
      {
        href: "https://yamada-colors.app",
        label: t("component.header.colors"),
      },
    ]
  }, [t])

  return (
    <HStack
      as="header"
      bg="bg/90"
      gap="sm"
      left="0"
      position="sticky"
      px="{space}"
      py="sm"
      right="0"
      top="0"
      w="full"
      zIndex="yamcha"
    >
      <NextLinkIconButton href="/" variant="ghost" icon={<LogoIcon />} />

      <NavMenu display={{ base: "flex", md: "none" }} flex="1" items={items} />

      <Spacer display={{ base: "none", md: "block" }} />

      <ButtonGroup size="sm" variant="ghost" alignItems="center" gap="sm">
        <Search />

        <Separator
          display={{ base: "none", lg: "block" }}
          h="4"
          orientation="vertical"
        />

        <HStack display={{ base: "flex", sm: "none" }} gap="sm">
          <NextLinkIconButton
            href={CONSTANTS.SNS.GITHUB.PROJECT}
            aria-label={t("component.header.github")}
            color="fg.emphasized"
            external
            icon={<GithubIcon />}
          />

          <Separator h="4" orientation="vertical" />

          <NextLinkIconButton
            href={CONSTANTS.SNS.DISCORD}
            aria-label={t("common.discord")}
            color="fg.emphasized"
            external
            icon={<DiscordIcon />}
          />

          <Separator h="4" orientation="vertical" />

          <LangButton />

          <Separator h="4" orientation="vertical" />

          <ColorModeButton />

          <Separator
            display={{ base: "none", md: "block" }}
            h="4"
            orientation="vertical"
          />
        </HStack>

        <MobileMenu items={items} />
      </ButtonGroup>
    </HStack>
  )
}
