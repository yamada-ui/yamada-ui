import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShipWheel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShipWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShipWheelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ShipWheel} className={cx("ui-lucide-icon", className)} {...rest} />
)
