import { forwardRef } from "@yamada-ui/core"
import { Clock3 as Clock3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock3Props = LucideIconProps

/**
 * `Clock3` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock3 = forwardRef<Clock3Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock3Icon} {...props} />
))
