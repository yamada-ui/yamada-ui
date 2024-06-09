import { forwardRef } from "@yamada-ui/core"
import { StepBack as StepBackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StepBackProps = LucideIconProps

/**
 * `StepBack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StepBack = forwardRef<StepBackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StepBackIcon} {...props} />
))
