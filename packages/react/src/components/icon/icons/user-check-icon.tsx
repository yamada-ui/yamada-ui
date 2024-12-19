import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UserCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
