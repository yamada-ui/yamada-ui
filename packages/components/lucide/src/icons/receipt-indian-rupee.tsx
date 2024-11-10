import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ReceiptIndianRupee as OriginalReceiptIndianRupee } from "lucide-react"

/**
 * `ReceiptIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptIndianRupeeIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalReceiptIndianRupee} {...props} />,
)

/**
 * `ReceiptIndianRupee` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ReceiptIndianRupeeIcon` instead.
 */
export const ReceiptIndianRupee = ReceiptIndianRupeeIcon
