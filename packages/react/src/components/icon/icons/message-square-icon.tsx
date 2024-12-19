import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessageSquare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
