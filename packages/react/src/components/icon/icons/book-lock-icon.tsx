import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookLock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookLockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookLock} className={cx("ui-lucide-icon", className)} {...rest} />
)
