import { forwardRef } from "@yamada-ui/core"
import { Hourglass as HourglassIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HourglassProps = LucideIconProps

/**
 * `Hourglass` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Hourglass = forwardRef<HourglassProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HourglassIcon} {...props} />
))
