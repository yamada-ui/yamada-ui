import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bot} className={cx("ui-lucide-icon", className)} {...rest} />
)
