import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Barcode as LucideBarcodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BarcodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarcodeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBarcodeIcon} {...props} />
))

/**
 * @deprecated Use `BarcodeIcon` instead.
 */
export const Barcode = BarcodeIcon
