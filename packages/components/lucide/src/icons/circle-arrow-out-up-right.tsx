import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutUpRight as CircleArrowOutUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleArrowOutUpRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpRight = forwardRef<
  CircleArrowOutUpRightProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={CircleArrowOutUpRightIcon} {...props} />
))
