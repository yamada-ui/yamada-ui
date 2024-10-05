import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Crosshair as CrosshairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Crosshair` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Crosshair = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CrosshairIcon} {...props} />
))
