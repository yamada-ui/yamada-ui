import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Badge } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Badge} className={cx("ui-lucide-icon", className)} {...rest} />
)
