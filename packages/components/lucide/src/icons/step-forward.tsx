import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StepForward as LucideStepForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StepForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StepForwardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideStepForwardIcon} {...props} />
  ),
)

/**
 * @deprecated Use `StepForwardIcon` instead.
 */
export const StepForward = StepForwardIcon
