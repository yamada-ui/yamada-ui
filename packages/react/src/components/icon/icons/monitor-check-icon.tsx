import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MonitorCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
