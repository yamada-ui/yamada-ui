import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
