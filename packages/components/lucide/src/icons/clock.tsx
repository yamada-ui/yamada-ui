import { forwardRef } from "@yamada-ui/core"
import { Clock as ClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClockProps = LucideIconProps

/**
 * `Clock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock = forwardRef<ClockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ClockIcon} {...props} />
))
