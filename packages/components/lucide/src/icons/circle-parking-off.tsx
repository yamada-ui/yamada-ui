import { forwardRef } from "@yamada-ui/core"
import { CircleParkingOff as CircleParkingOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleParkingOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParkingOff = forwardRef<CircleParkingOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleParkingOffIcon} {...props} />,
)
