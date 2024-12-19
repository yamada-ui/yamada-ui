import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookText} className={cx("ui-lucide-icon", className)} {...rest} />
)
