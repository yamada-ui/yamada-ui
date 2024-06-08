import { forwardRef } from "@yamada-ui/core"
import { Dice4 as Dice4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Dice4Props = LucideIconProps

/**
 * `Dice4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice4 = forwardRef<Dice4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Dice4Icon} {...props} />
))
