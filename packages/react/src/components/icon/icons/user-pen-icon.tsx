import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserPen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserPenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UserPen} className={cx("ui-lucide-icon", className)} {...rest} />
)
