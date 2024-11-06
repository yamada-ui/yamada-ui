import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Crosshair as LucideCrosshairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CrosshairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CrosshairIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCrosshairIcon} {...props} />,
)

/**
 * @deprecated Use `CrosshairIcon` instead.
 */
export const Crosshair = CrosshairIcon
