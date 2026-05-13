"use client"

import type { NextLinkButtonProps } from "@/components"
import { ButtonGroup, handlerAll } from "@yamada-ui/react"
import { NextLinkButton } from "@/components"
import { usePathname } from "@/i18n"

export interface NavMenuProps extends ButtonGroup.RootProps {
  items: { href: string; label: string }[]
  itemProps?: Omit<NextLinkButtonProps, "href">
  onClose?: () => void
}

export function NavMenu({ items, itemProps, onClose, ...rest }: NavMenuProps) {
  const pathname = usePathname()

  return (
    <ButtonGroup.Root as="nav" size="sm" variant="ghost" gap="xs" {...rest}>
      {items.map(({ href, label }) => (
        <NextLinkButton
          key={href}
          href={href}
          aria-current={pathname.startsWith(href) ? "page" : undefined}
          external={href.startsWith("https://")}
          fontWeight="normal"
          {...itemProps}
          onClick={handlerAll(itemProps?.onClick, () => {
            if (pathname !== href) return

            onClose?.()

            window.scrollTo({ behavior: "smooth", top: 0 })
          })}
        >
          {label}
        </NextLinkButton>
      ))}
    </ButtonGroup.Root>
  )
}
