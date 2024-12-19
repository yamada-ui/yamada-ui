import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RouteOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RouteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RouteOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RouteOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
