import { forwardRef } from "@yamada-ui/core"
import { ChartBarBig as ChartBarBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChartBarBigProps = LucideIconProps

/**
 * `ChartBarBig` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarBig = forwardRef<ChartBarBigProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ChartBarBigIcon} {...props} />
))
