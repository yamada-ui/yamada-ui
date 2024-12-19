import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Telescope } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TelescopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TelescopeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Telescope} className={cx("ui-lucide-icon", className)} {...rest} />
)
