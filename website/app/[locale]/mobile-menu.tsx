"use client"

import type { NextLinkButtonProps } from "@/components"
import {
  Box,
  ButtonGroup,
  CloseButton,
  Drawer,
  GithubIcon,
  handlerAll,
  IconButton,
  MenuIcon,
  Separator,
  Text,
  useBreakpointEffect,
  useDisclosure,
  useUpdateEffect,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import { NextLinkButton, NextLinkIconButton } from "@/components"
import { CONSTANTS } from "@/constants"
import { getDocMap } from "@/data"
import { useLocale, usePathname } from "@/i18n"
import { ColorModeButton } from "./color-mode-button"
import { LangButton } from "./lang-button"
import { NavMenu } from "./nav-menu"

export interface MobileMenuProps {
  items: { href: string; label: string }[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const { open, onClose, onOpen } = useDisclosure()
  const t = useTranslations("component.header")
  const pathname = usePathname()

  useBreakpointEffect(
    (breakpoint) => {
      if (!["md", "sm"].includes(breakpoint)) onClose()
    },
    [onClose],
  )

  useUpdateEffect(() => {
    if (open) onClose()
  }, [pathname])

  return (
    <Drawer.Root
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={false}
      closeOnDrag
      open={open}
      withCloseButton={false}
      withDragBar={false}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Drawer.OpenTrigger>
        <IconButton
          aria-label={t("menu")}
          color="fg.emphasized"
          display={{ base: "none", md: "flex" }}
          icon={<MenuIcon />}
        />
      </Drawer.OpenTrigger>

      <Drawer.Content w="70%">
        <Drawer.Header gap="sm" justifyContent="flex-end" pt="sm" px="md">
          <NextLinkIconButton
            href={CONSTANTS.SNS.GITHUB.PROJECT}
            aria-label={t("github")}
            color="fg.emphasized"
            external
            icon={<GithubIcon />}
          />

          <Separator h="4" orientation="vertical" />

          <LangButton />

          <Separator h="4" orientation="vertical" />

          <ColorModeButton />

          <Separator h="4" orientation="vertical" />

          <Drawer.CloseTrigger>
            <CloseButton size="sm" color="fg.emphasized" />
          </Drawer.CloseTrigger>
        </Drawer.Header>

        <Drawer.Body mt="md" px="md">
          <NavMenu
            alignItems="stretch"
            flexDirection="column"
            items={items}
            w="full"
            itemProps={{
              variant: { base: "ghost", _current: "solid" },
              justifyContent: "flex-start",
            }}
          />

          <DocsMenu />
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}

function DocsMenu() {
  const t = useTranslations("docs")
  const pathname = usePathname()
  const { lang } = useLocale()
  const docMap = useMemo(() => getDocMap(lang), [lang])
  const changelog = pathname.startsWith("/docs/changelog")

  const primaryItems = useMemo(() => {
    const { items = [] } = docMap

    return items
  }, [docMap])

  const secondaryItems = useMemo(() => {
    const { items = [] } =
      primaryItems.find((item) => pathname.startsWith(item.pathname!)) ?? {}

    return [
      {
        pathname: pathname.split("/").slice(0, 3).join("/"),
        segment: "overview",
        title: changelog ? t("latest") : t("overview"),
      },
      ...items,
    ]
  }, [changelog, pathname, primaryItems, t])

  return (
    <VStack display={pathname.startsWith("/docs") ? "flex" : "none"} gap="md">
      <Separator />

      <ButtonGroup
        as="nav"
        size="sm"
        variant="ghost"
        alignItems="stretch"
        flexDirection="column"
        gap="xs"
        w="full"
      >
        {primaryItems.map(({ pathname: href, segment, title }) => (
          <DocsMenuItem key={href} href={href!} segment={segment}>
            {title}
          </DocsMenuItem>
        ))}
      </ButtonGroup>

      <Separator />

      <Box as="nav" _lastChild={{ mb: "0" }}>
        {secondaryItems.map(({ items, pathname: href, segment, title }) => {
          if (items) {
            return (
              <Box key={segment} my="lg" _lastChild={{ mb: "0" }}>
                <Text
                  as="span"
                  color="fg.muted"
                  fontSize="sm"
                  lineClamp={1}
                  mb="2"
                  ms="3"
                >
                  {title}
                </Text>

                {items.map(({ pathname: href, segment, title }) => {
                  return (
                    <DocsMenuItem key={href} href={href!} segment={segment}>
                      {title}
                    </DocsMenuItem>
                  )
                })}
              </Box>
            )
          } else {
            return (
              <DocsMenuItem key={segment} href={href!} segment={segment}>
                {title}
              </DocsMenuItem>
            )
          }
        })}
      </Box>
    </VStack>
  )
}

interface DocsMenuItemProps extends NextLinkButtonProps {
  segment: string
}

function DocsMenuItem({
  href,
  children,
  segment,
  onClick,
  ...rest
}: DocsMenuItemProps) {
  const pathname = usePathname()
  const overview = segment === "overview"
  const current = overview
    ? pathname === href
    : pathname.startsWith(href.toString())

  return (
    <NextLinkButton
      href={href}
      size="sm"
      variant={{ base: "ghost", _current: "solid" }}
      aria-current={current ? "page" : undefined}
      display="block"
      fontWeight="normal"
      justifyContent="flex-start"
      mb="xs"
      onClick={handlerAll(onClick, () =>
        window.scrollTo({ behavior: "instant", top: 0 }),
      )}
      {...rest}
    >
      <Text as="span" truncated>
        {children}
      </Text>
    </NextLinkButton>
  )
}
