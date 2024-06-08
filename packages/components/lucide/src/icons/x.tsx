import { forwardRef } from "@yamada-ui/core"
import { X as XIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type XProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const X = forwardRef<XProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={XIcon} {...props} />
))
