import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bomb as LucideBombIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BombIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BombIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBombIcon} {...props} />
))

/**
 * @deprecated Use `BombIcon` instead.
 */
export const Bomb = BombIcon
