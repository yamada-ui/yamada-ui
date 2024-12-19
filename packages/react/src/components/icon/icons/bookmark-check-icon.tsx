import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookmarkCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BookmarkCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
