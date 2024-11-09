import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Calendar1 as Calendar1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Calendar1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Calendar1 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Calendar1Icon} {...props} />
))
