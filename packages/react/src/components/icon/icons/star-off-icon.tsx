import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { StarOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StarOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={StarOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
