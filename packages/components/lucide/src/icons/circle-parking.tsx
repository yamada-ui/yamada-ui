import { forwardRef } from "@yamada-ui/core"
import { CircleParking as CircleParkingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleParkingProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParking = forwardRef<CircleParkingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleParkingIcon} {...props} />,
)
