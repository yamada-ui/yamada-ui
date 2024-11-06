import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptIndianRupee as LucideReceiptIndianRupeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptIndianRupeeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptIndianRupeeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptIndianRupeeIcon` instead.
 */
export const ReceiptIndianRupee = ReceiptIndianRupeeIcon
