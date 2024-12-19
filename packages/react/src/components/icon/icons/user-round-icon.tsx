import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRound } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UserRound} className={cx("ui-lucide-icon", className)} {...rest} />
)
