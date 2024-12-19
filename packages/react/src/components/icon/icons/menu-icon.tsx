import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Menu } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MenuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MenuIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Menu} className={cx("ui-lucide-icon", className)} {...rest} />
)
