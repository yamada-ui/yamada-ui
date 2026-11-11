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
      {items.map(({ href, label }) => {
        const external = href.startsWith("https://")
        const current =
          !external &&
          pathname.startsWith(href.split("/").slice(0, 2).join("/"))

        return (
          <NextLinkButton
            key={href}
            href={href}
            variant={{ base: "ghost", _current: "solid" }}
            aria-current={current ? "page" : undefined}
            external={external}
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
        )
      })}
    </ButtonGroup.Root>
  )
}
