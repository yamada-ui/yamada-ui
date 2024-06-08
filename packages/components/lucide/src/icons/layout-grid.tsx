import { forwardRef } from "@yamada-ui/core"
import { LayoutGrid as LayoutGridIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LayoutGridProps = LucideIconProps

/**
 * `LayoutGrid` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutGrid = forwardRef<LayoutGridProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LayoutGridIcon} {...props} />
))
