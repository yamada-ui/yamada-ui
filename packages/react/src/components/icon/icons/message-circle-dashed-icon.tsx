import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageCircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleDashedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageCircleDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
