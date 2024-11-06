import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ScanFace as LucideScanFaceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScanFaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanFaceIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScanFaceIcon} {...props} />
))

/**
 * @deprecated Use `ScanFaceIcon` instead.
 */
export const ScanFace = ScanFaceIcon
