import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ReplyAll } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ReplyAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplyAllIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ReplyAll} className={cx("ui-lucide-icon", className)} {...rest} />
)
