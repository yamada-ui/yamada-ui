import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorPause } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPauseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MonitorPause}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
