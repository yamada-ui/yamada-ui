import { forwardRef } from "@yamada-ui/core"
import { BadgeRussianRuble as BadgeRussianRubleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BadgeRussianRubleProps = LucideIconProps

/**
 * `BadgeRussianRuble` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeRussianRuble = forwardRef<BadgeRussianRubleProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={BadgeRussianRubleIcon} {...props} />
  ),
)
