import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Coins as LucideCoinsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CoinsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCoinsIcon} {...props} />
))

/**
 * @deprecated Use `CoinsIcon` instead.
 */
export const Coins = CoinsIcon
