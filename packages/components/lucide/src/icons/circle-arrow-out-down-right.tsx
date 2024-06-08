import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutDownRight as CircleArrowOutDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleArrowOutDownRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutDownRight = forwardRef<
  CircleArrowOutDownRightProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={CircleArrowOutDownRightIcon} {...props} />
))
