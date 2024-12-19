import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { NavigationOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NavigationOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NavigationOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={NavigationOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
