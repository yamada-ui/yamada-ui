import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlarmClockOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlarmClockOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
