import { forwardRef } from "@yamada-ui/core"
import { ScanLine as ScanLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScanLineProps = LucideIconProps

/**
 * `ScanLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanLine = forwardRef<ScanLineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanLineIcon} {...props} />
))
