import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
