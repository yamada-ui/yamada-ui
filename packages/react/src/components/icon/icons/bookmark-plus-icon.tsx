import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookmarkPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BookmarkPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
