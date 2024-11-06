import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StepBack as LucideStepBackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StepBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StepBackIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideStepBackIcon} {...props} />
))

/**
 * @deprecated Use `StepBackIcon` instead.
 */
export const StepBack = StepBackIcon
