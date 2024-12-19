import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlarmClockMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlarmClockMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
