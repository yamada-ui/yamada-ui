import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UserX} className={cx("ui-lucide-icon", className)} {...rest} />
)
