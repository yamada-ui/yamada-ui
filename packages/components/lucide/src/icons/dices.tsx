import { forwardRef } from "@yamada-ui/core"
import { Dices as DicesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DicesProps = LucideIconProps

/**
 * `Dices` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dices = forwardRef<DicesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DicesIcon} {...props} />
))
