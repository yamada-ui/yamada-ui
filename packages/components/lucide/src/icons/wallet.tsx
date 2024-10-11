import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wallet as WalletIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Wallet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wallet = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WalletIcon} {...props} />
))
