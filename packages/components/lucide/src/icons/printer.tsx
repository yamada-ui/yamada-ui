import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Printer as LucidePrinterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PrinterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PrinterIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePrinterIcon} {...props} />
))

/**
 * @deprecated Use `PrinterIcon` instead.
 */
export const Printer = PrinterIcon
