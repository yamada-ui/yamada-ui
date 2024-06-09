import { forwardRef } from "@yamada-ui/core"
import { Cuboid as CuboidIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CuboidProps = LucideIconProps

/**
 * `Cuboid` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cuboid = forwardRef<CuboidProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CuboidIcon} {...props} />
))
