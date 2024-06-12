import { forwardRef } from "@yamada-ui/core"
import { ScanSearch as ScanSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScanSearchProps = LucideIconProps

/**
 * `ScanSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanSearch = forwardRef<ScanSearchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScanSearchIcon} {...props} />
))
