import { forwardRef } from "@yamada-ui/core"
import { BrickWall as BrickWallIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BrickWallProps = LucideIconProps

/**
 * `BrickWall` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrickWall = forwardRef<BrickWallProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BrickWallIcon} {...props} />
))
