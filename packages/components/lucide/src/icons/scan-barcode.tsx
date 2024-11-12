import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ScanBarcode as OriginalScanBarcode } from "lucide-react"

/**
 * `ScanBarcodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanBarcodeIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalScanBarcode} {...props} />
))

/**
 * `ScanBarcode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ScanBarcodeIcon` instead.
 */
export const ScanBarcode = ScanBarcodeIcon
