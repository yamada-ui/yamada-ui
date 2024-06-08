import { forwardRef } from "@yamada-ui/core"
import { ArrowDown10 as ArrowDown10Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDown10Props = LucideIconProps

/**
 * `ArrowDown10` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown10 = forwardRef<ArrowDown10Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowDown10Icon} {...props} />
))
