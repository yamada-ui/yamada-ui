import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UserMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
