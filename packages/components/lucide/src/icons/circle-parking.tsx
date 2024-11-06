import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleParking as LucideCircleParkingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleParkingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParkingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleParkingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleParkingIcon` instead.
 */
export const CircleParking = CircleParkingIcon
