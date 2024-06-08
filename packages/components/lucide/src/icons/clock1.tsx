import { forwardRef } from "@yamada-ui/core"
import { Clock1 as Clock1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock1Props = LucideIconProps

/**
 * `Clock1` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock1 = forwardRef<Clock1Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock1Icon} {...props} />
))
