import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cuboid as LucideCuboidIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CuboidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CuboidIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCuboidIcon} {...props} />
))

/**
 * @deprecated Use `CuboidIcon` instead.
 */
export const Cuboid = CuboidIcon
