import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareHeartIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareHeart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
