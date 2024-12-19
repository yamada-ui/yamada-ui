import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Route } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RouteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RouteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Route} className={cx("ui-lucide-icon", className)} {...rest} />
)
