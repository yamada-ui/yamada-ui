import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareParkingOff as LucideSquareParkingOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareParkingOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareParkingOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareParkingOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareParkingOffIcon` instead.
 */
export const SquareParkingOff = SquareParkingOffIcon
