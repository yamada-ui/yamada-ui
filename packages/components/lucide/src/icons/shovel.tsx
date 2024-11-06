import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shovel as LucideShovelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShovelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShovelIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShovelIcon} {...props} />
))

/**
 * @deprecated Use `ShovelIcon` instead.
 */
export const Shovel = ShovelIcon
