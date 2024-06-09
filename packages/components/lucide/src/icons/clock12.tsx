import { forwardRef } from "@yamada-ui/core"
import { Clock12 as Clock12Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock12Props = LucideIconProps

/**
 * `Clock12` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock12 = forwardRef<Clock12Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock12Icon} {...props} />
))
