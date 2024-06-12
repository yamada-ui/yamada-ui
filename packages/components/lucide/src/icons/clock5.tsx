import { forwardRef } from "@yamada-ui/core"
import { Clock5 as Clock5Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock5Props = LucideIconProps

/**
 * `Clock5` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock5 = forwardRef<Clock5Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock5Icon} {...props} />
))
