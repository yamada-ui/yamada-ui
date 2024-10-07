import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrainTrack as TrainTrackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrainTrack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainTrack = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrainTrackIcon} {...props} />
))
