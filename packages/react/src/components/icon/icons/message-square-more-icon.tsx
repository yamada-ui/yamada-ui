import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareMore } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareMoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareMoreIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareMore}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
