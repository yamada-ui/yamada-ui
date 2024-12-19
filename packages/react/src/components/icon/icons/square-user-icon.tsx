import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareUser } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareUserIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SquareUser} className={cx("ui-lucide-icon", className)} {...rest} />
)
