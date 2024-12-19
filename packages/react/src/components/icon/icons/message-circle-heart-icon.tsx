import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleHeartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCircleHeart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
