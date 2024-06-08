import { forwardRef } from "@yamada-ui/core"
import { BotMessageSquare as BotMessageSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BotMessageSquareProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotMessageSquare = forwardRef<BotMessageSquareProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BotMessageSquareIcon} {...props} />,
)
