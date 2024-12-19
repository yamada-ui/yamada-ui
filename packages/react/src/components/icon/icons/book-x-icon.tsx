import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookX} className={cx("ui-lucide-icon", className)} {...rest} />
)
