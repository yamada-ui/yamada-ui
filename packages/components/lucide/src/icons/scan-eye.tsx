import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanEye as LucideScanEyeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanEyeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanEyeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScanEyeIcon} {...props} />
))

/**
 * @deprecated Use `ScanEyeIcon` instead.
 */
export const ScanEye = ScanEyeIcon
