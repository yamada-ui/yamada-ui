import { forwardRef } from "@yamada-ui/core"
import { Tally3 as Tally3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Tally3Props = LucideIconProps

/**
 * `Tally3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally3 = forwardRef<Tally3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Tally3Icon} {...props} />
))
