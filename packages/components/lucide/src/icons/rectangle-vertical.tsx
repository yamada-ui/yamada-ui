import { forwardRef } from "@yamada-ui/core"
import { RectangleVertical as RectangleVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RectangleVerticalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleVertical = forwardRef<RectangleVerticalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={RectangleVerticalIcon} {...props} />
  ),
)
