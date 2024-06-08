import { forwardRef } from "@yamada-ui/core"
import { SlidersHorizontal as SlidersHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SlidersHorizontalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlidersHorizontal = forwardRef<SlidersHorizontalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SlidersHorizontalIcon} {...props} />
  ),
)
