import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UserRoundPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
