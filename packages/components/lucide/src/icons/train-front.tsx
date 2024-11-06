import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrainFront as LucideTrainFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrainFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrainFrontIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTrainFrontIcon} {...props} />,
)

/**
 * @deprecated Use `TrainFrontIcon` instead.
 */
export const TrainFront = TrainFrontIcon
