import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bluetooth } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BluetoothIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bluetooth} className={cx("ui-lucide-icon", className)} {...rest} />
)
