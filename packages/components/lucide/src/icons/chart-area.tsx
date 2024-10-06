import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartArea as ChartAreaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartArea` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartArea = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartAreaIcon} {...props} />
))
