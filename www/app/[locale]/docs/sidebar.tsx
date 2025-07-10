"use client"

import type { NextLinkButtonProps } from "@/components"
import { Box, handlerAll, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import { NextLinkButton } from "@/components"
import { getDocMap } from "@/data"
import { useLocale, usePathname } from "@/i18n"

export function Sidebar() {
  const pathname = usePathname()
  const { lang } = useLocale()
  const t = useTranslations("docs")
  const changelog = pathname.startsWith("/docs/changelog")

  const items = useMemo(() => {
    const docMap = getDocMap(lang)
    const { items = [] } =
      docMap.items?.find((item) => pathname.startsWith(item.pathname!)) ?? {}

    return [
      {
        pathname: pathname.split("/").slice(0, 3).join("/"),
        segment: "overview",
        title: changelog ? t("latest") : t("overview"),
      },
      ...items,
    ]
  }, [changelog, lang, pathname, t])

  return (
    <Box
      as="aside"
      display={{ base: "block", md: "none" }}
      gridColumn="1 / 2"
      gridRow="1 / 3"
      maxH="calc(100dvh - {header-height})"
      overflowY="auto"
      pb="lg"
      position="sticky"
      pt="1.5"
      px="1"
      top="{header-height}"
    >
      <Box as="nav" _lastChild={{ mb: "0" }}>
        {items.map(({ items, pathname: href, segment, title }) => {
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
                    <SidebarItem key={href} href={href!} segment={segment}>
                      {title}
                    </SidebarItem>
                  )
                })}
              </Box>
            )
          } else {
            return (
              <SidebarItem key={segment} href={href!} segment={segment}>
                {title}
              </SidebarItem>
            )
          }
        })}
      </Box>
    </Box>
  )
}

interface SidebarItemProps extends NextLinkButtonProps {
  segment: string
}

function SidebarItem({ href, segment, onClick, ...rest }: SidebarItemProps) {
  const pathname = usePathname()
  const overview = segment === "overview"
  const current = overview
    ? pathname === href
    : pathname.startsWith(href.toString())

  return (
    <NextLinkButton
      href={href}
      size="sm"
      variant={{ base: "ghost", _current: "subtle" }}
      aria-current={current ? "page" : undefined}
      fontWeight="normal"
      justifyContent="flex-start"
      lineClamp={1}
      mb="xs"
      onClick={handlerAll(onClick, () =>
        window.scrollTo({ behavior: "instant", top: 0 }),
      )}
      {...rest}
    />
  )
}
