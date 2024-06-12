import { forwardRef } from "@yamada-ui/core"
import { Radiation as RadiationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RadiationProps = LucideIconProps

/**
 * `Radiation` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Radiation = forwardRef<RadiationProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RadiationIcon} {...props} />
))
