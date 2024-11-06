import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dice1 as LucideDice1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dice1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice1Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDice1Icon} {...props} />
))

/**
 * @deprecated Use `Dice1Icon` instead.
 */
export const Dice1 = Dice1Icon
