"use client"

import { ButtonGroup } from "@yamada-ui/react"
import { useMemo } from "react"
import { NextLinkButton } from "@/components"
import { getDocMap } from "@/data"
import { useLocale, usePathname } from "@/i18n"

export function Header() {
  const pathname = usePathname()
  const { lang } = useLocale()

  const items = useMemo(() => {
    const { items = [] } = getDocMap(lang)

    return items
  }, [lang])

  return (
    <ButtonGroup
      as="nav"
      size="sm"
      variant="ghost"
      bg="bg"
      display={{ base: "flex", md: "none" }}
      gap="xs"
      justifyContent="center"
      left="0"
      position="sticky"
      py="sm"
      right="0"
      top="14"
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
    </ButtonGroup>
  )
}
