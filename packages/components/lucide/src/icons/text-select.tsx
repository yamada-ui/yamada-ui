import { forwardRef } from "@yamada-ui/core"
import { TextSelect as TextSelectIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TextSelectProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextSelect = forwardRef<TextSelectProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TextSelectIcon} {...props} />
))
