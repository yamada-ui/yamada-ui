import { forwardRef } from "@yamada-ui/core"
import { Bike as BikeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BikeProps = LucideIconProps

/**
 * `Bike` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bike = forwardRef<BikeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BikeIcon} {...props} />
))
