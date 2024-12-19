import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareReply } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareReplyIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareReply}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
