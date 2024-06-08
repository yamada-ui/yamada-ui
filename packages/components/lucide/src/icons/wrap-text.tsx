import { forwardRef } from "@yamada-ui/core"
import { WrapText as WrapTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WrapTextProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WrapText = forwardRef<WrapTextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WrapTextIcon} {...props} />
))
