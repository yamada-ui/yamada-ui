import { forwardRef } from "@yamada-ui/core"
import { ArrowUp10 as ArrowUp10Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUp10Props = LucideIconProps

/**
 * `ArrowUp10` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUp10 = forwardRef<ArrowUp10Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowUp10Icon} {...props} />
))
