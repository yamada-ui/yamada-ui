import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WalletCards as LucideWalletCardsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WalletCardsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletCardsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideWalletCardsIcon} {...props} />
  ),
)

/**
 * @deprecated Use `WalletCardsIcon` instead.
 */
export const WalletCards = WalletCardsIcon
