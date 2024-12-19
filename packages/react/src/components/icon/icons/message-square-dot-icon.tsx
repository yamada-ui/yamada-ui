import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MessageSquareDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MessageSquareDot}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
