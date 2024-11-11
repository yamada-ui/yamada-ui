import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BadgeSwissFranc as OriginalBadgeSwissFranc } from "lucide-react"

/**
 * `BadgeSwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeSwissFrancIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBadgeSwissFranc} {...props} />,
)

/**
 * `BadgeSwissFranc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BadgeSwissFrancIcon` instead.
 */
export const BadgeSwissFranc = BadgeSwissFrancIcon
