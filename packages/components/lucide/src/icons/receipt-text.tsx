import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptText as ReceiptTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptText = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReceiptTextIcon} {...props} />
))
