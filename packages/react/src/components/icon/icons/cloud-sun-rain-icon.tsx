import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudSunRain } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudSunRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSunRainIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CloudSunRain}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
