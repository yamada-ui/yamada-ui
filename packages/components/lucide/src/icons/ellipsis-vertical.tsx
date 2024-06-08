import { forwardRef } from "@yamada-ui/core"
import { EllipsisVertical as EllipsisVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EllipsisVerticalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EllipsisVertical = forwardRef<EllipsisVerticalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={EllipsisVerticalIcon} {...props} />,
)
