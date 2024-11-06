import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CarTaxiFront as LucideCarTaxiFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CarTaxiFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarTaxiFrontIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCarTaxiFrontIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CarTaxiFrontIcon` instead.
 */
export const CarTaxiFront = CarTaxiFrontIcon
