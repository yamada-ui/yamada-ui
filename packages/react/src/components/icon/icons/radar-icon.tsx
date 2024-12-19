import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Radar } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RadarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadarIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Radar} className={cx("ui-lucide-icon", className)} {...rest} />
)
