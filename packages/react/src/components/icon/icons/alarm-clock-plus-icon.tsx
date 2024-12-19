import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlarmClockPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={AlarmClockPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
