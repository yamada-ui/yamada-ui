import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptCent as LucideReceiptCentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptCentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptCentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptCentIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptCentIcon` instead.
 */
export const ReceiptCent = ReceiptCentIcon
