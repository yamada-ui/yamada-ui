import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dice5 as LucideDice5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dice5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice5Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDice5Icon} {...props} />
))

/**
 * @deprecated Use `Dice5Icon` instead.
 */
export const Dice5 = Dice5Icon
