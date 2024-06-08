import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeCenter as AlignHorizontalDistributeCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalDistributeCenterProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeCenter = forwardRef<
  AlignHorizontalDistributeCenterProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalDistributeCenterIcon} {...props} />
))
