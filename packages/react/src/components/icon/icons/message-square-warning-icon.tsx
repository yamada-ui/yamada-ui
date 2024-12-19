import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareWarning } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareWarningIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareWarning}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
