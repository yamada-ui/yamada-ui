import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Weight as LucideWeightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WeightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WeightIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWeightIcon} {...props} />
))

/**
 * @deprecated Use `WeightIcon` instead.
 */
export const Weight = WeightIcon
