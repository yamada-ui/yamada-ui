import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookmarkXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookmarkX} className={cx("ui-lucide-icon", className)} {...rest} />
)
