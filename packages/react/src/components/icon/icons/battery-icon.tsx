import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Battery } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BatteryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Battery} className={cx("ui-lucide-icon", className)} {...rest} />
)
