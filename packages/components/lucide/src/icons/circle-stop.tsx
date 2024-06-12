import { forwardRef } from "@yamada-ui/core"
import { CircleStop as CircleStopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleStopProps = LucideIconProps

/**
 * `CircleStop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleStop = forwardRef<CircleStopProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleStopIcon} {...props} />
))
