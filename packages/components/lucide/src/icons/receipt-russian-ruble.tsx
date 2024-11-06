import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptRussianRuble as LucideReceiptRussianRubleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptRussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptRussianRubleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptRussianRubleIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptRussianRubleIcon` instead.
 */
export const ReceiptRussianRuble = ReceiptRussianRubleIcon
