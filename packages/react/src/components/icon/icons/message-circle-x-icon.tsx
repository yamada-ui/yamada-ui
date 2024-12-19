import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessageCircleX}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
