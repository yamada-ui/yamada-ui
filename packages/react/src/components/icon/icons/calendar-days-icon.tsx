import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarDays } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarDaysIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarDaysIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarDays}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
