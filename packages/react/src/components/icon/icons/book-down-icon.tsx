import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
