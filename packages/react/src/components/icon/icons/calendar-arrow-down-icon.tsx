import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowDownIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={CalendarArrowDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
