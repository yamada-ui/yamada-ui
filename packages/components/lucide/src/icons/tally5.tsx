import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tally5 as LucideTally5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Tally5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally5Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTally5Icon} {...props} />
))

/**
 * @deprecated Use `Tally5Icon` instead.
 */
export const Tally5 = Tally5Icon
