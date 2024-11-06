import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tally3 as LucideTally3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Tally3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTally3Icon} {...props} />
))

/**
 * @deprecated Use `Tally3Icon` instead.
 */
export const Tally3 = Tally3Icon
