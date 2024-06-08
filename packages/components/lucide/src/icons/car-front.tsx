import { forwardRef } from "@yamada-ui/core"
import { CarFront as CarFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CarFrontProps = LucideIconProps

/**
 * `CarFront` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarFront = forwardRef<CarFrontProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CarFrontIcon} {...props} />
))
