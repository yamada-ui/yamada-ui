import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PrinterCheck as LucidePrinterCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PrinterCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PrinterCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePrinterCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PrinterCheckIcon` instead.
 */
export const PrinterCheck = PrinterCheckIcon
