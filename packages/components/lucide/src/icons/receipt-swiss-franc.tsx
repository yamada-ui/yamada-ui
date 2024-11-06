import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptSwissFranc as LucideReceiptSwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptSwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptSwissFrancIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptSwissFrancIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptSwissFrancIcon` instead.
 */
export const ReceiptSwissFranc = ReceiptSwissFrancIcon
