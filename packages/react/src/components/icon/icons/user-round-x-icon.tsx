import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `UserRoundXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={UserRoundX} className={cx("ui-lucide-icon", className)} {...rest} />
)
