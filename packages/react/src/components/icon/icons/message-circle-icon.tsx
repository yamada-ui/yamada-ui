import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessageCircle}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
