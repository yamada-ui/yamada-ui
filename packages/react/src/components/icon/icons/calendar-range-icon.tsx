import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarRange } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarRangeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarRangeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarRange}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
