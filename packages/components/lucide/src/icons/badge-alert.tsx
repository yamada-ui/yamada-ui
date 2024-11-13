import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { BadgeAlert as OriginalBadgeAlert } from "lucide-react"

/**
 * `BadgeAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeAlertIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalBadgeAlert}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `BadgeAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BadgeAlertIcon` instead.
 */
export const BadgeAlert = BadgeAlertIcon
