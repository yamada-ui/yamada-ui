import { forwardRef } from "@yamada-ui/core"
import { Flame as FlameIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Flame` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Flame = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FlameIcon} {...props} />
))
