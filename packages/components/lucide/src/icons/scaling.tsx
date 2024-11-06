import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scaling as LucideScalingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScalingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScalingIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScalingIcon} {...props} />
))

/**
 * @deprecated Use `ScalingIcon` instead.
 */
export const Scaling = ScalingIcon
