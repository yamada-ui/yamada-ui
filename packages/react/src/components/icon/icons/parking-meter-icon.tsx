import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ParkingMeter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ParkingMeterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ParkingMeterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ParkingMeter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
