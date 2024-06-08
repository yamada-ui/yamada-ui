import { forwardRef } from "@yamada-ui/core"
import { ArrowBigRight as ArrowBigRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowBigRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigRight = forwardRef<ArrowBigRightProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigRightIcon} {...props} />,
)
