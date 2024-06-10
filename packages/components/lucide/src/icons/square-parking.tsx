import { forwardRef } from "@yamada-ui/core"
import { SquareParking as SquareParkingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareParkingProps = LucideIconProps

/**
 * `SquareParking` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareParking = forwardRef<SquareParkingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareParkingIcon} {...props} />,
)
