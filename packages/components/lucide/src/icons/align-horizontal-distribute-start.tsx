import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalDistributeStart as AlignHorizontalDistributeStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalDistributeStartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalDistributeStart = forwardRef<
  AlignHorizontalDistributeStartProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalDistributeStartIcon} {...props} />
))
