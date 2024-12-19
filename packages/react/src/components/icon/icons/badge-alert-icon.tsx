import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeAlert } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeAlertIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeAlert} className={cx("ui-lucide-icon", className)} {...rest} />
)
