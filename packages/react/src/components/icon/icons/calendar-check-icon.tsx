import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
