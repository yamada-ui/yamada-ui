import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptPoundSterling as LucideReceiptPoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptPoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptPoundSterlingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideReceiptPoundSterlingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ReceiptPoundSterlingIcon` instead.
 */
export const ReceiptPoundSterling = ReceiptPoundSterlingIcon
