import { forwardRef } from "@yamada-ui/core"
import { Building as BuildingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BuildingProps = LucideIconProps

/**
 * `Building` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Building = forwardRef<BuildingProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BuildingIcon} {...props} />
))
