import { forwardRef } from "@yamada-ui/core"
import { Barcode as BarcodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarcodeProps = LucideIconProps

/**
 * `Barcode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Barcode = forwardRef<BarcodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BarcodeIcon} {...props} />
))
