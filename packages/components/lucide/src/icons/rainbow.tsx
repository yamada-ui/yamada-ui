import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rainbow as LucideRainbowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RainbowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RainbowIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRainbowIcon} {...props} />
))

/**
 * @deprecated Use `RainbowIcon` instead.
 */
export const Rainbow = RainbowIcon
