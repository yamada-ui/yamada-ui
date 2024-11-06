import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanSearch as LucideScanSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideScanSearchIcon} {...props} />,
)

/**
 * @deprecated Use `ScanSearchIcon` instead.
 */
export const ScanSearch = ScanSearchIcon
