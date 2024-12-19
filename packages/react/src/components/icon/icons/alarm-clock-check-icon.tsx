import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlarmClockCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlarmClockCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
