import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BluetoothSearching } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BluetoothSearchingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BluetoothSearchingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={BluetoothSearching}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
