import { forwardRef } from "@yamada-ui/core"
import { Radius as RadiusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RadiusProps = LucideIconProps

/**
 * `Radius` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Radius = forwardRef<RadiusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RadiusIcon} {...props} />
))
