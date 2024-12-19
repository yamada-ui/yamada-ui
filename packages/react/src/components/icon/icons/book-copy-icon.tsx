import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookCopy } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookCopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookCopyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookCopy} className={cx("ui-lucide-icon", className)} {...rest} />
)
