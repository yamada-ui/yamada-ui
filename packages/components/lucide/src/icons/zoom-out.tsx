import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ZoomOut as LucideZoomOutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ZoomOutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ZoomOutIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideZoomOutIcon} {...props} />
))

/**
 * @deprecated Use `ZoomOutIcon` instead.
 */
export const ZoomOut = ZoomOutIcon
