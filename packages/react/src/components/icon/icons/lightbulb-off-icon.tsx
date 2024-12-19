import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LightbulbOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LightbulbOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LightbulbOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LightbulbOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
