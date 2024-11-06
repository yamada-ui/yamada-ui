import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareParking as LucideSquareParkingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareParkingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareParkingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareParkingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareParkingIcon` instead.
 */
export const SquareParking = SquareParkingIcon
