import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dice2 as LucideDice2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dice2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDice2Icon} {...props} />
))

/**
 * @deprecated Use `Dice2Icon` instead.
 */
export const Dice2 = Dice2Icon
