import { forwardRef } from "@yamada-ui/core"
import { Car as CarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CarProps = LucideIconProps

/**
 * `Car` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Car = forwardRef<CarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CarIcon} {...props} />
))
