import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudMoonRain } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudMoonRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudMoonRainIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudMoonRain}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
