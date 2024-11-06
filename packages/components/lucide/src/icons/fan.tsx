import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Fan as LucideFanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFanIcon} {...props} />
))

/**
 * @deprecated Use `FanIcon` instead.
 */
export const Fan = FanIcon
