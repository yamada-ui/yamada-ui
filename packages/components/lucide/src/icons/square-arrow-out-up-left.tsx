import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutUpLeft as SquareArrowOutUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowOutUpLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutUpLeft = forwardRef<
  SquareArrowOutUpLeftProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareArrowOutUpLeftIcon} {...props} />
))
