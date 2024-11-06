import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleParkingOff as LucideCircleParkingOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleParkingOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParkingOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleParkingOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleParkingOffIcon` instead.
 */
export const CircleParkingOff = CircleParkingOffIcon
