import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorSmartphone } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MonitorSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSmartphoneIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MonitorSmartphone}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
