import { forwardRef } from "@yamada-ui/core"
import { CircleMinus as CircleMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleMinusProps = LucideIconProps

/**
 * `CircleMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleMinus = forwardRef<CircleMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleMinusIcon} {...props} />
))
