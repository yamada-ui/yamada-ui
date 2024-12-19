import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareCode } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareCodeIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareCode}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
