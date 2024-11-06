import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rat as LucideRatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RatIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRatIcon} {...props} />
))

/**
 * @deprecated Use `RatIcon` instead.
 */
export const Rat = RatIcon
