import { forwardRef } from "@yamada-ui/core"
import { IndentDecrease as IndentDecreaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type IndentDecreaseProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentDecrease = forwardRef<IndentDecreaseProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={IndentDecreaseIcon} {...props} />,
)
