import { forwardRef } from "@yamada-ui/core"
import { WalletCards as WalletCardsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WalletCardsProps = LucideIconProps

/**
 * `WalletCards` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletCards = forwardRef<WalletCardsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WalletCardsIcon} {...props} />
))
