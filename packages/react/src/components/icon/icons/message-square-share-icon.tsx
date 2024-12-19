import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareShare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareShareIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareShare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
