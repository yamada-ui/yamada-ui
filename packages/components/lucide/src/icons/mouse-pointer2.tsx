import { forwardRef } from "@yamada-ui/core"
import { MousePointer2 as MousePointer2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MousePointer2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointer2 = forwardRef<MousePointer2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MousePointer2Icon} {...props} />,
)
