import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessagesSquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessagesSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessagesSquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessagesSquare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
