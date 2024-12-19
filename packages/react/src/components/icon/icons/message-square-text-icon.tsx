import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareText } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareTextIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareText}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
