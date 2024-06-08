import { forwardRef } from "@yamada-ui/core"
import { BadgeInfo as BadgeInfoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeInfoProps = LucideIconProps

/**
 * `BadgeInfo` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeInfo = forwardRef<BadgeInfoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeInfoIcon} {...props} />
))
