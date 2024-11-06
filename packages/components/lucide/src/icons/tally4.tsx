import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tally4 as LucideTally4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Tally4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTally4Icon} {...props} />
))

/**
 * @deprecated Use `Tally4Icon` instead.
 */
export const Tally4 = Tally4Icon
