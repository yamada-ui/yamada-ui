import { forwardRef } from "@yamada-ui/core"
import { Dice3 as Dice3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Dice3Props = LucideIconProps

/**
 * `Dice3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice3 = forwardRef<Dice3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Dice3Icon} {...props} />
))
