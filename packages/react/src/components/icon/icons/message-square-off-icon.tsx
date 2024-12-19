import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessageSquareOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
