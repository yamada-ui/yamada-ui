import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleMore } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleMoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleMoreIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCircleMore}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
