import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BotOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BotOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BotOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
