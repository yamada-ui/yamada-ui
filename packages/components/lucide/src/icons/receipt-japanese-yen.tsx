import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptJapaneseYen as LucideReceiptJapaneseYenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptJapaneseYenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptJapaneseYenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptJapaneseYenIcon` instead.
 */
export const ReceiptJapaneseYen = ReceiptJapaneseYenIcon
