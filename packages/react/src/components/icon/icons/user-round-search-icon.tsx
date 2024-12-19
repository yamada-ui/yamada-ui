import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={UserRoundSearch}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
