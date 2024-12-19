import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UserRoundCog}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
