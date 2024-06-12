import { forwardRef } from "@yamada-ui/core"
import { FileScan as FileScanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileScanProps = LucideIconProps

/**
 * `FileScan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileScan = forwardRef<FileScanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileScanIcon} {...props} />
))
