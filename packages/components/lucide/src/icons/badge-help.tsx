import { forwardRef } from "@yamada-ui/core"
import { BadgeHelp as BadgeHelpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeHelpProps = LucideIconProps

/**
 * `BadgeHelp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeHelp = forwardRef<BadgeHelpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeHelpIcon} {...props} />
))
