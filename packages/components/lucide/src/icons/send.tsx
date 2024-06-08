import { forwardRef } from "@yamada-ui/core"
import { Send as SendIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SendProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Send = forwardRef<SendProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SendIcon} {...props} />
))
