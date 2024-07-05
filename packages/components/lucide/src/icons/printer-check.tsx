import { forwardRef } from "@yamada-ui/core"
import { PrinterCheck as PrinterCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PrinterCheckProps = LucideIconProps

/**
 * `PrinterCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PrinterCheck = forwardRef<PrinterCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PrinterCheckIcon} {...props} />,
)
