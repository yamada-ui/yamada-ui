import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptJapaneseYen as ReceiptJapaneseYenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptJapaneseYen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptJapaneseYen = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ReceiptJapaneseYenIcon} {...props} />
  ),
)
