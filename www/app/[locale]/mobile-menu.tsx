"use client"

import type { NextLinkButtonProps } from "@/components"
import type { DocMap } from "@/data"
import {
  Box,
  ButtonGroup,
  ChevronRightIcon,
  CloseButton,
  Collapse,
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
import { useMemo, useState } from "react"
import {
  DiscordIcon,
  NextLinkButton,
  NextLinkIconButton,
  Status,
} from "@/components"
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
  const t = useTranslations()
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
          aria-label={t("component.header.menu")}
          color="fg.emphasized"
          display={{ base: "none", md: "flex" }}
          icon={<MenuIcon />}
        />
      </Drawer.OpenTrigger>

      <Drawer.Content w="70%">
        <Drawer.Header gap="sm" justifyContent="flex-end" pt="sm" px="md">
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
            onClose={onClose}
          />

          <DocsMenu onClose={onClose} />
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}

interface DocsMenuProps {
  onClose: () => void
}

function DocsMenu({ onClose }: DocsMenuProps) {
  const t = useTranslations("docs")
  const pathname = usePathname()
  const { locale } = useLocale()
  const docMap = useMemo(() => getDocMap(locale), [locale])
  const changelog = pathname.startsWith("/docs/changelog")
  const items = useMemo(() => {
    return (
      docMap.items?.map((item) => ({
        ...item,
        items: [
          {
            pathname: item.pathname,
            segment: "overview",
            title: changelog ? t("latest") : t("overview"),
          },
          ...(item.items ?? []),
        ],
      })) ?? []
    )
  }, [changelog, docMap.items, t])
  const [selectedPathname, setSelectedPathname] = useState<string | undefined>(
    items.find((item) => pathname.startsWith(item.pathname!))?.pathname,
  )

  return (
    <>
      <Separator />

      <ButtonGroup.Root
        as="nav"
        size="sm"
        variant="ghost"
        alignItems="stretch"
        flexDirection="column"
        gap="xs"
        w="full"
      >
        {items.map((item) => {
          const open = selectedPathname === item.pathname

          return (
            <DocsMenuGroup
              key={item.pathname}
              open={open}
              onClick={() =>
                setSelectedPathname(open ? undefined : item.pathname)
              }
              onClose={onClose}
              {...item}
            />
          )
        })}
      </ButtonGroup.Root>
    </>
  )
}

interface DocsMenuGroupProps extends DocMap {
  open: boolean
  onClick: () => void
  onClose: () => void
}

function DocsMenuGroup({
  items = [],
  open,
  title,
  onClick,
  onClose,
}: DocsMenuGroupProps) {
  return (
    <VStack gap="xs">
      <ButtonGroup.Item
        size="sm"
        variant="ghost"
        endIcon={
          <ChevronRightIcon
            color="fg.muted"
            ms="auto"
            transform={open ? "rotate(90deg)" : "rotate(0deg)"}
            transitionDuration="moderate"
            transitionProperty="transform"
          />
        }
        fontWeight="normal"
        justifyContent="flex-start"
        onClick={onClick}
      >
        <Text>{title}</Text>
      </ButtonGroup.Item>

      <Collapse as="nav" open={open} ps="md" w="full" _lastChild={{ mb: "0" }}>
        {items.map(({ items, pathname: href, segment, status, title }) => {
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

                {items.map(({ pathname: href, segment, status, title }) => {
                  return (
                    <DocsMenuItem
                      key={href}
                      href={href!}
                      segment={segment}
                      onClose={onClose}
                    >
                      <Text as="span" lineClamp={1}>
                        {title}
                      </Text>
                      {status ? <Status status={status} /> : null}
                    </DocsMenuItem>
                  )
                })}
              </Box>
            )
          } else {
            return (
              <DocsMenuItem
                key={segment}
                href={href!}
                segment={segment}
                onClose={onClose}
              >
                <Text as="span" lineClamp={1}>
                  {title}
                </Text>
                {status ? <Status status={status} /> : null}
              </DocsMenuItem>
            )
          }
        })}
      </Collapse>
    </VStack>
  )
}

interface DocsMenuItemProps extends NextLinkButtonProps {
  segment: string
  onClose: () => void
}

function DocsMenuItem({
  href,
  segment,
  onClick,
  onClose,
  ...rest
}: DocsMenuItemProps) {
  const pathname = usePathname()
  const overview = segment === "overview"
  const current = overview
    ? pathname === href
    : pathname.length <= href.toString().length &&
      pathname.startsWith(href.toString())

  return (
    <NextLinkButton
      href={href}
      size="sm"
      variant={{ base: "ghost", _current: "solid" }}
      aria-current={current ? "page" : undefined}
      data-group
      display="flex"
      fontWeight="normal"
      justifyContent="flex-start"
      mb="xs"
      onClick={handlerAll(onClick, () => {
        if (pathname === href) onClose()

        window.scrollTo({ behavior: "instant", top: 0 })
      })}
      {...rest}
    />
  )
}
