import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Building as LucideBuildingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BuildingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BuildingIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBuildingIcon} {...props} />
))

/**
 * @deprecated Use `BuildingIcon` instead.
 */
export const Building = BuildingIcon
