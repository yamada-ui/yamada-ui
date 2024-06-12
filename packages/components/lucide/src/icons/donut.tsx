import { forwardRef } from "@yamada-ui/core"
import { Donut as DonutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DonutProps = LucideIconProps

/**
 * `Donut` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Donut = forwardRef<DonutProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DonutIcon} {...props} />
))
