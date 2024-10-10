import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClockArrowUp as ClockArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClockArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ClockArrowUpIcon} {...props} />
))
