import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TvMinimalPlay as LucideTvMinimalPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TvMinimalPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimalPlayIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTvMinimalPlayIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TvMinimalPlayIcon` instead.
 */
export const TvMinimalPlay = TvMinimalPlayIcon
