import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ReceiptPoundSterling as ReceiptPoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ReceiptPoundSterling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptPoundSterling = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ReceiptPoundSterlingIcon} {...props} />
  ),
)
