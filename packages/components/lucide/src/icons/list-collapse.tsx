import { forwardRef } from "@yamada-ui/core"
import { ListCollapse as ListCollapseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListCollapseProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCollapse = forwardRef<ListCollapseProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ListCollapseIcon} {...props} />,
)
