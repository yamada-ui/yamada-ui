import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmSmoke } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlarmSmokeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmSmokeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AlarmSmoke} className={cx("ui-lucide-icon", className)} {...rest} />
)
