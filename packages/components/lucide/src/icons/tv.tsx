import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tv as LucideTvIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TvIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTvIcon} {...props} />
))

/**
 * @deprecated Use `TvIcon` instead.
 */
export const Tv = TvIcon
