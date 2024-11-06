import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BusFront as LucideBusFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BusFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BusFrontIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBusFrontIcon} {...props} />
))

/**
 * @deprecated Use `BusFrontIcon` instead.
 */
export const BusFront = BusFrontIcon
