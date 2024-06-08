import { forwardRef } from "@yamada-ui/core"
import { TrainFront as TrainFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TrainFrontProps = LucideIconProps

/**
 * `TrainFront` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFront = forwardRef<TrainFrontProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrainFrontIcon} {...props} />
))
