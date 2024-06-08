import { forwardRef } from "@yamada-ui/core"
import { Dice2 as Dice2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Dice2Props = LucideIconProps

/**
 * `Dice2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice2 = forwardRef<Dice2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Dice2Icon} {...props} />
))
