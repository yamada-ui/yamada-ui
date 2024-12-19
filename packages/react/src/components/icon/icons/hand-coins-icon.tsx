import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HandCoins } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HandCoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandCoinsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HandCoins} className={cx("ui-lucide-icon", className)} {...rest} />
)
