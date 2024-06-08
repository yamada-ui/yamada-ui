import { forwardRef } from "@yamada-ui/core"
import { Contact as ContactIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ContactProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Contact = forwardRef<ContactProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ContactIcon} {...props} />
))
