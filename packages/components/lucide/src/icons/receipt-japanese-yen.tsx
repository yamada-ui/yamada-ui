import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ReceiptJapaneseYen as OriginalReceiptJapaneseYen } from "lucide-react"

/**
 * `ReceiptJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptJapaneseYenIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalReceiptJapaneseYen} {...props} />,
)

/**
 * `ReceiptJapaneseYen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ReceiptJapaneseYenIcon` instead.
 */
export const ReceiptJapaneseYen = ReceiptJapaneseYenIcon
