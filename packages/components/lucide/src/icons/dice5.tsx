import { forwardRef } from "@yamada-ui/core"
import { Dice5 as Dice5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Dice5Props = LucideIconProps

/**
 * `Dice5` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice5 = forwardRef<Dice5Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Dice5Icon} {...props} />
))
