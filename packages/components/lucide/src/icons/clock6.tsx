import { forwardRef } from "@yamada-ui/core"
import { Clock6 as Clock6Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock6Props = LucideIconProps

/**
 * `Clock6` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock6 = forwardRef<Clock6Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock6Icon} {...props} />
))
