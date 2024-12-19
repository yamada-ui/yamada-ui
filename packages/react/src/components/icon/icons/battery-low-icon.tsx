import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryLow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BatteryLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryLowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BatteryLow} className={cx("ui-lucide-icon", className)} {...rest} />
)
