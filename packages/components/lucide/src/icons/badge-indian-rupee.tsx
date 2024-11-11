import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BadgeIndianRupee as OriginalBadgeIndianRupee } from "lucide-react"

/**
 * `BadgeIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeIndianRupeeIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBadgeIndianRupee} {...props} />,
)

/**
 * `BadgeIndianRupee` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BadgeIndianRupeeIcon` instead.
 */
export const BadgeIndianRupee = BadgeIndianRupeeIcon
