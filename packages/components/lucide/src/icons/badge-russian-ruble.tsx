import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BadgeRussianRuble as OriginalBadgeRussianRuble } from "lucide-react"

/**
 * `BadgeRussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeRussianRubleIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBadgeRussianRuble} {...props} />,
)

/**
 * `BadgeRussianRuble` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BadgeRussianRubleIcon` instead.
 */
export const BadgeRussianRuble = BadgeRussianRubleIcon
