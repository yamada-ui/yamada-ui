import { forwardRef } from "@yamada-ui/core"
import { Ratio as RatioIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RatioProps = LucideIconProps

/**
 * `Ratio` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ratio = forwardRef<RatioProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RatioIcon} {...props} />
))
