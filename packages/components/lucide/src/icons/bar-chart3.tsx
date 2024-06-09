import { forwardRef } from "@yamada-ui/core"
import { BarChart3 as BarChart3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChart3Props = LucideIconProps

/**
 * `BarChart3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChart3 = forwardRef<BarChart3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BarChart3Icon} {...props} />
))
