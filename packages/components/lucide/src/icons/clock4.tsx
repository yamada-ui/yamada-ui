import { forwardRef } from "@yamada-ui/core"
import { Clock4 as Clock4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock4Props = LucideIconProps

/**
 * `Clock4` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock4 = forwardRef<Clock4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock4Icon} {...props} />
))
