import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BluetoothConnected } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BluetoothConnectedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothConnectedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BluetoothConnected}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
