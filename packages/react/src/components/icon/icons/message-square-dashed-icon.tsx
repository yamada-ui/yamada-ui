import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDashedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MessageSquareDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
