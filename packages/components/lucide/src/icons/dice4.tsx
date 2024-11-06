import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dice4 as LucideDice4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dice4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice4Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDice4Icon} {...props} />
))

/**
 * @deprecated Use `Dice4Icon` instead.
 */
export const Dice4 = Dice4Icon
