import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorPlay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPlayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MonitorPlay}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
