import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
