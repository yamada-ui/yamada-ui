import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Move3d as LucideMove3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Move3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Move3dIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMove3dIcon} {...props} />
))

/**
 * @deprecated Use `Move3dIcon` instead.
 */
export const Move3d = Move3dIcon
