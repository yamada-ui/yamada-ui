import { forwardRef } from "@yamada-ui/core"
import { Printer as PrinterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PrinterProps = LucideIconProps

/**
 * `Printer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Printer = forwardRef<PrinterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PrinterIcon} {...props} />
))
