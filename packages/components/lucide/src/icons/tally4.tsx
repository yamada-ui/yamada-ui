import { forwardRef } from "@yamada-ui/core"
import { Tally4 as Tally4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Tally4Props = LucideIconProps

/**
 * `Tally4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tally4 = forwardRef<Tally4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Tally4Icon} {...props} />
))
