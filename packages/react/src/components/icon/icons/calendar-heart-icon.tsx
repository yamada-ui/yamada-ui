import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarHeartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarHeart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
