import { forwardRef } from "@yamada-ui/core"
import { ReceiptText as ReceiptTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReceiptTextProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptText = forwardRef<ReceiptTextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReceiptTextIcon} {...props} />
))
