import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarMinus2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CalendarMinus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarMinus2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CalendarMinus2}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
