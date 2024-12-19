import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookOpen} className={cx("ui-lucide-icon", className)} {...rest} />
)
