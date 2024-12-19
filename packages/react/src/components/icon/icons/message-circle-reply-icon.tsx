import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleReply } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleReplyIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCircleReply}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
