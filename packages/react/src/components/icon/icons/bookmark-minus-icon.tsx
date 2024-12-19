import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookmarkMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BookmarkMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
