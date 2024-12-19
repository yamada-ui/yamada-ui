import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UserRoundCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
