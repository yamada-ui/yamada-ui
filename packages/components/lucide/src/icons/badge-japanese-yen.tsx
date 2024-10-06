import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeJapaneseYen as BadgeJapaneseYenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeJapaneseYen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeJapaneseYen = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BadgeJapaneseYenIcon} {...props} />,
)
