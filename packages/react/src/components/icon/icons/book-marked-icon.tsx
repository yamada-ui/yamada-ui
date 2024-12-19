import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BookMarked } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BookMarkedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookMarkedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BookMarked} className={cx("ui-lucide-icon", className)} {...rest} />
)
