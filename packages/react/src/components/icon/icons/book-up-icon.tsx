import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
