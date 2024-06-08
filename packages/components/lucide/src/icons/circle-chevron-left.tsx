import { forwardRef } from "@yamada-ui/core"
import { CircleChevronLeft as CircleChevronLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleChevronLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronLeft = forwardRef<CircleChevronLeftProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CircleChevronLeftIcon} {...props} />
  ),
)
