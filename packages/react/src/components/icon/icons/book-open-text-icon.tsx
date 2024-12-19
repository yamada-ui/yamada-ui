import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookOpenText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookOpenTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenTextIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BookOpenText}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
