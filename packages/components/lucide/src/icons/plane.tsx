import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Plane as LucidePlaneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePlaneIcon} {...props} />
))

/**
 * @deprecated Use `PlaneIcon` instead.
 */
export const Plane = PlaneIcon
