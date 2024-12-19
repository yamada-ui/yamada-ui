import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UserRoundMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
