import { forwardRef } from "@yamada-ui/core"
import { Dice1 as Dice1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Dice1Props = LucideIconProps

/**
 * `Dice1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice1 = forwardRef<Dice1Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Dice1Icon} {...props} />
))
