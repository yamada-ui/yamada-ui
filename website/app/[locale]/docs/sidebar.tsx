"use client"

import type { NextLinkButtonProps } from "@/components"
import { Box, Text, VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import { NextLinkButton } from "@/components"
import { getDocMap } from "@/data"
import { useLocale, usePathname } from "@/i18n"

export function Sidebar() {
  const pathname = usePathname()
  const { lang } = useLocale()
  const t = useTranslations("docs")

  const items = useMemo(() => {
    const docMap = getDocMap(lang)
    const { items = [] } =
      docMap.items?.find((item) => pathname.startsWith(item.pathname!)) ?? {}

    return [
      {
        pathname: pathname.split("/").slice(0, 3).join("/"),
        segment: "overview",
        title: t("overview"),
      },
      ...items,
    ]
  }, [lang, pathname, t])

  return (
    <Box
      as="aside"
      display={{ base: "block", md: "none" }}
      gridColumn="1 / 2"
      gridRow="1 / 3"
      maxH="calc(100dvh - {sizes.14} - {sizes.13} - {spaces.lg})"
      overflowY="auto"
      pb="lg"
      position="sticky"
      pt="1.5"
      px="1"
      top="calc({sizes.14} + {sizes.13} + {spaces.lg})"
    >
      <VStack as="nav" gap="xs">
        {items.map(({ items, pathname: href, segment, title }) => {
          if (items) {
            return (
              <VStack key={segment} gap="xs" mt="md">
                <Text
                  as="span"
                  color="fg.muted"
                  fontSize="sm"
                  lineClamp={1}
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
              </VStack>
            )
          } else {
            return (
              <SidebarItem key={segment} href={href!} segment={segment}>
                {title}
              </SidebarItem>
            )
          }
        })}
      </VStack>
    </Box>
  )
}

interface SidebarItemProps extends NextLinkButtonProps {
  segment: string
}

function SidebarItem({ href, segment, ...rest }: SidebarItemProps) {
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
      {...rest}
    />
  )
}
