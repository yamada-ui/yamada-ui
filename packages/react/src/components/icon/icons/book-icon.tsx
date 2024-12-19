import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Book } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Book} className={cx("ui-lucide-icon", className)} {...rest} />
)
