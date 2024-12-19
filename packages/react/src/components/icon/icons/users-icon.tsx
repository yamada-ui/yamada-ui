import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Users } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UsersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsersIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Users} className={cx("ui-lucide-icon", className)} {...rest} />
)
