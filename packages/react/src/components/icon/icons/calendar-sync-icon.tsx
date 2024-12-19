import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarSync } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarSyncIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarSyncIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarSync}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
