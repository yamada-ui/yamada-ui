import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeJapaneseYen as LucideBadgeJapaneseYenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeJapaneseYenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeJapaneseYenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBadgeJapaneseYenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BadgeJapaneseYenIcon` instead.
 */
export const BadgeJapaneseYen = BadgeJapaneseYenIcon
