import { forwardRef } from "@yamada-ui/core"
import { Clock10 as Clock10Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock10Props = LucideIconProps

/**
 * `Clock10` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock10 = forwardRef<Clock10Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock10Icon} {...props} />
))
