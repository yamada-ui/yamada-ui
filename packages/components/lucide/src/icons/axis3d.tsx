import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Axis3d as LucideAxis3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Axis3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Axis3dIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAxis3dIcon} {...props} />
))

/**
 * @deprecated Use `Axis3dIcon` instead.
 */
export const Axis3d = Axis3dIcon
