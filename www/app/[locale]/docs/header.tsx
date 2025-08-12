"use client"

import { ButtonGroup } from "@yamada-ui/react"
import { useMemo } from "react"
import { NextLinkButton } from "@/components"
import { getDocMap } from "@/data"
import { useLocale, usePathname } from "@/i18n"

export function Header() {
  const pathname = usePathname()
  const { locale } = useLocale()

  const items = useMemo(() => {
    const { items = [] } = getDocMap(locale)

    return items
  }, [locale])

  return (
    <ButtonGroup.Root
      as="nav"
      size="sm"
      variant="ghost"
      bg="bg/90"
      display={{ base: "flex", md: "none" }}
      gap="xs"
      justifyContent="center"
      left="0"
      position="sticky"
      py="sm"
      right="0"
      top="{root-header-height}"
      zIndex="yamcha"
    >
      {items.map(({ pathname: href, title }) => (
        <NextLinkButton
          key={href}
          href={href!}
          variant={{ base: "ghost", _current: "solid" }}
          aria-current={pathname.startsWith(href!) ? "page" : undefined}
          fontWeight="normal"
        >
          {title}
        </NextLinkButton>
      ))}
    </ButtonGroup.Root>
  )
}
