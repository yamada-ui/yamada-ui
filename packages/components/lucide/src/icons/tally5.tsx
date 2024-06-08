import { forwardRef } from "@yamada-ui/core"
import { Tally5 as Tally5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Tally5Props = LucideIconProps

/**
 * `Tally5` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally5 = forwardRef<Tally5Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Tally5Icon} {...props} />
))
