import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CarFront as LucideCarFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CarFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarFrontIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCarFrontIcon} {...props} />
))

/**
 * @deprecated Use `CarFrontIcon` instead.
 */
export const CarFront = CarFrontIcon
