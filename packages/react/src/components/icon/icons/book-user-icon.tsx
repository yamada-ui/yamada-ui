import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookUser } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUserIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookUser} className={cx("ui-lucide-icon", className)} {...rest} />
)
