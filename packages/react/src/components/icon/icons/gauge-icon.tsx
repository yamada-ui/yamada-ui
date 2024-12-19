import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Gauge } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GaugeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GaugeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Gauge} className={cx("ui-lucide-icon", className)} {...rest} />
)
