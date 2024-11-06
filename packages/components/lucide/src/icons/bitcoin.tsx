import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bitcoin as LucideBitcoinIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BitcoinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BitcoinIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBitcoinIcon} {...props} />
))

/**
 * @deprecated Use `BitcoinIcon` instead.
 */
export const Bitcoin = BitcoinIcon
