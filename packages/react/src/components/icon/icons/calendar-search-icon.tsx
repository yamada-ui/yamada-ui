import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarSearch}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
