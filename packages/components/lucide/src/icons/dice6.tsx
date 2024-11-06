import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dice6 as LucideDice6Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dice6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice6Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDice6Icon} {...props} />
))

/**
 * @deprecated Use `Dice6Icon` instead.
 */
export const Dice6 = Dice6Icon
