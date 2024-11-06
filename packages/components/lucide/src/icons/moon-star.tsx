import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoonStar as LucideMoonStarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoonStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoonStarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMoonStarIcon} {...props} />
))

/**
 * @deprecated Use `MoonStarIcon` instead.
 */
export const MoonStar = MoonStarIcon
