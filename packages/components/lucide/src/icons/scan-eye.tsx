import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanEye as ScanEyeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanEye` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanEye = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanEyeIcon} {...props} />
))
