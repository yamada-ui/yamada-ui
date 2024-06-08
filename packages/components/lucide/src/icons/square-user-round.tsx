import { forwardRef } from "@yamada-ui/core"
import { SquareUserRound as SquareUserRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareUserRoundProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareUserRound = forwardRef<SquareUserRoundProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={SquareUserRoundIcon} {...props} />,
)
