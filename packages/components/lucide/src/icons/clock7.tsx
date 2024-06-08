import { forwardRef } from "@yamada-ui/core"
import { Clock7 as Clock7Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock7Props = LucideIconProps

/**
 * `Clock7` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock7 = forwardRef<Clock7Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock7Icon} {...props} />
))
