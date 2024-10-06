import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rotate3d as Rotate3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Rotate3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rotate3d = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Rotate3dIcon} {...props} />
))
