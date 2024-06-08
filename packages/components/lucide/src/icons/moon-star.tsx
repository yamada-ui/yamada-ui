import { forwardRef } from "@yamada-ui/core"
import { MoonStar as MoonStarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MoonStarProps = LucideIconProps

/**
 * `MoonStar` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoonStar = forwardRef<MoonStarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoonStarIcon} {...props} />
))
