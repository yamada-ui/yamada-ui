import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dice3 as LucideDice3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Dice3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDice3Icon} {...props} />
))

/**
 * @deprecated Use `Dice3Icon` instead.
 */
export const Dice3 = Dice3Icon
