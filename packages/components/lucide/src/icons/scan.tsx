import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scan as LucideScanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScanIcon} {...props} />
))

/**
 * @deprecated Use `ScanIcon` instead.
 */
export const Scan = ScanIcon
