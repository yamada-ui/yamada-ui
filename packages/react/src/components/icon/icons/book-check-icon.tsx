import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookCheck} className={cx("ui-lucide-icon", className)} {...rest} />
)
