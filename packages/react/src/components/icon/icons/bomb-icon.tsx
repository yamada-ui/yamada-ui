import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bomb } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BombIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BombIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bomb} className={cx("ui-lucide-icon", className)} {...rest} />
)
