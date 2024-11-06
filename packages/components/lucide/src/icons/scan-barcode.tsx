import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanBarcode as LucideScanBarcodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanBarcodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanBarcodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideScanBarcodeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ScanBarcodeIcon` instead.
 */
export const ScanBarcode = ScanBarcodeIcon
