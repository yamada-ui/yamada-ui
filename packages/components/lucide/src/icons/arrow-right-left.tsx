import { forwardRef } from "@yamada-ui/core"
import { ArrowRightLeft as ArrowRightLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowRightLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightLeft = forwardRef<ArrowRightLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowRightLeftIcon} {...props} />,
)
