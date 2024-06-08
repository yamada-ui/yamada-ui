import { forwardRef } from "@yamada-ui/core"
import { Bomb as BombIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BombProps = LucideIconProps

/**
 * `Bomb` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bomb = forwardRef<BombProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BombIcon} {...props} />
))
