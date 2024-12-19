import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareLock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareLockIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareLock}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
