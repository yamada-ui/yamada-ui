import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UsersRound } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UsersRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsersRoundIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UsersRound} className={cx("ui-lucide-icon", className)} {...rest} />
)
