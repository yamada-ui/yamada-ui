import { forwardRef } from "@yamada-ui/core"
import { SquareParkingOff as SquareParkingOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareParkingOffProps = LucideIconProps

/**
 * `SquareParkingOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareParkingOff = forwardRef<SquareParkingOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareParkingOffIcon} {...props} />,
)
