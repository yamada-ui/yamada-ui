import { forwardRef } from "@yamada-ui/core"
import { BadgeCheck as BadgeCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeCheckProps = LucideIconProps

/**
 * `BadgeCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeCheck = forwardRef<BadgeCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeCheckIcon} {...props} />
))
