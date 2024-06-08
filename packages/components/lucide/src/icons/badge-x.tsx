import { forwardRef } from "@yamada-ui/core"
import { BadgeX as BadgeXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeXProps = LucideIconProps

/**
 * `BadgeX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeX = forwardRef<BadgeXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeXIcon} {...props} />
))
