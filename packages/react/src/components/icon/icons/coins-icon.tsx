import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Coins } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CoinsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Coins} className={cx("ui-lucide-icon", className)} {...rest} />
)