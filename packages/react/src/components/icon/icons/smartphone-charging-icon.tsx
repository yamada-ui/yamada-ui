import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SmartphoneCharging } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SmartphoneChargingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneChargingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SmartphoneCharging}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
