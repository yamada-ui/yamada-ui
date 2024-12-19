import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BotMessageSquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BotMessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BotMessageSquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BotMessageSquare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
