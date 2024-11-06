import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Circle as LucideCircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCircleIcon} {...props} />
))

/**
 * @deprecated Use `CircleIcon` instead.
 */
export const Circle = CircleIcon
