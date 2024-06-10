import { forwardRef } from "@yamada-ui/core"
import { Heart as HeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HeartProps = LucideIconProps

/**
 * `Heart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heart = forwardRef<HeartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeartIcon} {...props} />
))
