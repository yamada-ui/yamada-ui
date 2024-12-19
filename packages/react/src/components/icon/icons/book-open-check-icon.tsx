import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookOpenCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookOpenCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BookOpenCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
