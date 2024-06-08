import { forwardRef } from "@yamada-ui/core"
import { ReceiptCent as ReceiptCentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReceiptCentProps = LucideIconProps

/**
 * `ReceiptCent` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptCent = forwardRef<ReceiptCentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReceiptCentIcon} {...props} />
))
