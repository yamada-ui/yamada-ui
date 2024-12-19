import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BluetoothOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BluetoothOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BluetoothOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
