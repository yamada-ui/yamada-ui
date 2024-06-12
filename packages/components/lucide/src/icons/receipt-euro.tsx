import { forwardRef } from "@yamada-ui/core"
import { ReceiptEuro as ReceiptEuroIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReceiptEuroProps = LucideIconProps

/**
 * `ReceiptEuro` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptEuro = forwardRef<ReceiptEuroProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReceiptEuroIcon} {...props} />
))
