import { forwardRef } from "@yamada-ui/core"
import { Circle as CircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleProps = LucideIconProps

/**
 * `Circle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Circle = forwardRef<CircleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleIcon} {...props} />
))
