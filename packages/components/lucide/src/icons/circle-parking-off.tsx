import { forwardRef } from "@yamada-ui/core"
import { CircleParkingOff as CircleParkingOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleParkingOffProps = LucideIconProps

/**
 * `CircleParkingOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParkingOff = forwardRef<CircleParkingOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleParkingOffIcon} {...props} />,
)
