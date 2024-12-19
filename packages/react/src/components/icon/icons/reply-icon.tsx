import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Reply } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Reply} className={cx("ui-lucide-icon", className)} {...rest} />
)
