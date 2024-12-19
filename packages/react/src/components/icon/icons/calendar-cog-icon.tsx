import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarCog}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
