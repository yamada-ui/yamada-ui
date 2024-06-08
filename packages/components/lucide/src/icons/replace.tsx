import { forwardRef } from "@yamada-ui/core"
import { Replace as ReplaceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReplaceProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Replace = forwardRef<ReplaceProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReplaceIcon} {...props} />
))
