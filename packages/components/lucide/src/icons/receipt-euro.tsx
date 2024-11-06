import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptEuro as LucideReceiptEuroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptEuroIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptEuroIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptEuroIcon` instead.
 */
export const ReceiptEuro = ReceiptEuroIcon
