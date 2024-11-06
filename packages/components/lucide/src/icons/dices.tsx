import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dices as LucideDicesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DicesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DicesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDicesIcon} {...props} />
))

/**
 * @deprecated Use `DicesIcon` instead.
 */
export const Dices = DicesIcon
