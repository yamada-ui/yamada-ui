import { forwardRef } from "@yamada-ui/core"
import { Clock11 as Clock11Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock11Props = LucideIconProps

/**
 * `Clock11` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock11 = forwardRef<Clock11Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock11Icon} {...props} />
))
