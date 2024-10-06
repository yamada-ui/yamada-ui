import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Receipt as ReceiptIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Receipt` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Receipt = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReceiptIcon} {...props} />
))
