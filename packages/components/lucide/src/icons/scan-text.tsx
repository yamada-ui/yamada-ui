import { forwardRef } from "@yamada-ui/core"
import { ScanText as ScanTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScanTextProps = LucideIconProps

/**
 * `ScanText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanText = forwardRef<ScanTextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanTextIcon} {...props} />
))
