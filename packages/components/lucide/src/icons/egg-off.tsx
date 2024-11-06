import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EggOff as LucideEggOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EggOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EggOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEggOffIcon} {...props} />
))

/**
 * @deprecated Use `EggOffIcon` instead.
 */
export const EggOff = EggOffIcon
