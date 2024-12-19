import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Navigation } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `NavigationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NavigationIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Navigation} className={cx("ui-lucide-icon", className)} {...rest} />
)
