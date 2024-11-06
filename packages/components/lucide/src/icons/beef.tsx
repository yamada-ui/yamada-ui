import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Beef as LucideBeefIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BeefIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeefIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBeefIcon} {...props} />
))

/**
 * @deprecated Use `BeefIcon` instead.
 */
export const Beef = BeefIcon
