import { forwardRef } from "@yamada-ui/core"
import { BetweenHorizontalStart as BetweenHorizontalStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BetweenHorizontalStartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalStart = forwardRef<
  BetweenHorizontalStartProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={BetweenHorizontalStartIcon} {...props} />
))
