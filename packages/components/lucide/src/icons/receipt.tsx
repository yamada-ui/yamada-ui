import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Receipt as LucideReceiptIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideReceiptIcon} {...props} />
))

/**
 * @deprecated Use `ReceiptIcon` instead.
 */
export const Receipt = ReceiptIcon
