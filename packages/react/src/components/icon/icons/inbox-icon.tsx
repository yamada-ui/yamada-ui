import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Inbox } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `InboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InboxIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Inbox} className={cx("ui-lucide-icon", className)} {...rest} />
)
