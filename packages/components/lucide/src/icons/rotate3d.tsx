import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rotate3d as LucideRotate3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Rotate3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rotate3dIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRotate3dIcon} {...props} />
))

/**
 * @deprecated Use `Rotate3dIcon` instead.
 */
export const Rotate3d = Rotate3dIcon
