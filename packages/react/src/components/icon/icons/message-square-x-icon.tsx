import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessageSquareX}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
