import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleCode } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleCodeIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCircleCode}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
