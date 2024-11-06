import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wand as LucideWandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WandIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWandIcon} {...props} />
))

/**
 * @deprecated Use `WandIcon` instead.
 */
export const Wand = WandIcon
