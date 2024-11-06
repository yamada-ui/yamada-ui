import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanText as LucideScanTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanTextIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScanTextIcon} {...props} />
))

/**
 * @deprecated Use `ScanTextIcon` instead.
 */
export const ScanText = ScanTextIcon
