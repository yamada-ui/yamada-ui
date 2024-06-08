import { forwardRef } from "@yamada-ui/core"
import { CircleChevronUp as CircleChevronUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleChevronUpProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronUp = forwardRef<CircleChevronUpProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CircleChevronUpIcon} {...props} />,
)
