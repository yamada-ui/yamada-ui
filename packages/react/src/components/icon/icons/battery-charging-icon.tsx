import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryCharging } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BatteryChargingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryChargingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BatteryCharging}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
