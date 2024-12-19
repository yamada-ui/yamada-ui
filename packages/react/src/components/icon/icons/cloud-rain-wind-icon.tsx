import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudRainWind } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudRainWindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudRainWindIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudRainWind}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
