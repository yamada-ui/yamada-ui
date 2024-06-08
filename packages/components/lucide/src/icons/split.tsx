import { forwardRef } from "@yamada-ui/core"
import { Split as SplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SplitProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Split = forwardRef<SplitProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SplitIcon} {...props} />
))
