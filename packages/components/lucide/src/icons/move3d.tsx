import { forwardRef } from "@yamada-ui/core"
import { Move3d as Move3dIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Move3dProps = LucideIconProps

/**
 * `Move3d` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Move3d = forwardRef<Move3dProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Move3dIcon} {...props} />
))
