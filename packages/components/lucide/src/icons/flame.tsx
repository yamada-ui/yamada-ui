import { forwardRef } from "@yamada-ui/core"
import { Flame as FlameIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FlameProps = LucideIconProps

/**
 * `Flame` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flame = forwardRef<FlameProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlameIcon} {...props} />
))
