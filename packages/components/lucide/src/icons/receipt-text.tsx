import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptText as LucideReceiptTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptTextIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptTextIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptTextIcon` instead.
 */
export const ReceiptText = ReceiptTextIcon
