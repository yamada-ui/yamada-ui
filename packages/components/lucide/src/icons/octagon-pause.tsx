import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonPause as LucideOctagonPauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonPauseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideOctagonPauseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `OctagonPauseIcon` instead.
 */
export const OctagonPause = OctagonPauseIcon
