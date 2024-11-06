import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Donut as LucideDonutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DonutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DonutIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDonutIcon} {...props} />
))

/**
 * @deprecated Use `DonutIcon` instead.
 */
export const Donut = DonutIcon
