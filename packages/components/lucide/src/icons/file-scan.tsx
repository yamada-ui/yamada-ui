import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FileScan as LucideFileScanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FileScanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileScanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFileScanIcon} {...props} />
))

/**
 * @deprecated Use `FileScanIcon` instead.
 */
export const FileScan = FileScanIcon
