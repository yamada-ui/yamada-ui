import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
