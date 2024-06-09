import { forwardRef } from "@yamada-ui/core"
import { Rotate3d as Rotate3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Rotate3dProps = LucideIconProps

/**
 * `Rotate3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Rotate3d = forwardRef<Rotate3dProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Rotate3dIcon} {...props} />
))
