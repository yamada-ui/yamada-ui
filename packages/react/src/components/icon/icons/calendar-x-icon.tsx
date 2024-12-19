import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CalendarX} className={cx("ui-lucide-icon", className)} {...rest} />
)
