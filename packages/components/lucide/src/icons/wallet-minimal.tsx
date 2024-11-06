import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WalletMinimal as LucideWalletMinimalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WalletMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletMinimalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideWalletMinimalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `WalletMinimalIcon` instead.
 */
export const WalletMinimal = WalletMinimalIcon
