import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarArrowUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
