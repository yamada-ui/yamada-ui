import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanLine as LucideScanLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanLineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScanLineIcon} {...props} />
))

/**
 * @deprecated Use `ScanLineIcon` instead.
 */
export const ScanLine = ScanLineIcon
