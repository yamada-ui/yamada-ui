import { forwardRef } from "@yamada-ui/core"
import { StepForward as StepForwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StepForwardProps = LucideIconProps

/**
 * `StepForward` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StepForward = forwardRef<StepForwardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StepForwardIcon} {...props} />
))
