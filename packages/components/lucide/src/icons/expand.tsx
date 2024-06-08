import { forwardRef } from "@yamada-ui/core"
import { Expand as ExpandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ExpandProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Expand = forwardRef<ExpandProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ExpandIcon} {...props} />
))
