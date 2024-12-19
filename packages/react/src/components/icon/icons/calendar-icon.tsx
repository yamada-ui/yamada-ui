import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Calendar } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Calendar} className={cx("ui-lucide-icon", className)} {...rest} />
)
