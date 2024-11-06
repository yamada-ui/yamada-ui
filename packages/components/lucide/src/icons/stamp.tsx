import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Stamp as LucideStampIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StampIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StampIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideStampIcon} {...props} />
))

/**
 * @deprecated Use `StampIcon` instead.
 */
export const Stamp = StampIcon
