import { forwardRef } from "@yamada-ui/core"
import { Crosshair as CrosshairIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CrosshairProps = LucideIconProps

/**
 * `Crosshair` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Crosshair = forwardRef<CrosshairProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CrosshairIcon} {...props} />
))
