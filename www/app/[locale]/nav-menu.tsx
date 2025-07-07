"use client"

import type { NextLinkButtonProps } from "@/components"
import type { ButtonGroupProps } from "@yamada-ui/react"
import { ButtonGroup } from "@yamada-ui/react"
import { NextLinkButton } from "@/components"
import { usePathname } from "@/i18n"

export interface NavMenuProps extends ButtonGroupProps {
  items: { href: string; label: string }[]
  itemProps?: Omit<NextLinkButtonProps, "href">
}

export function NavMenu({ items, itemProps, ...rest }: NavMenuProps) {
  const pathname = usePathname()

  return (
    <ButtonGroup as="nav" size="sm" variant="ghost" gap="xs" {...rest}>
      {items.map(({ href, label }) => (
        <NextLinkButton
          key={href}
          href={href}
          aria-current={pathname.startsWith(href) ? "page" : undefined}
          external={href.startsWith("https://")}
          fontWeight="normal"
          {...itemProps}
        >
          {label}
        </NextLinkButton>
      ))}
    </ButtonGroup>
  )
}
