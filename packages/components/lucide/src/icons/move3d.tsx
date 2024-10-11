import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Move3d as Move3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Move3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Move3d = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Move3dIcon} {...props} />
))
