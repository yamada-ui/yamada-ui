import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dice3 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Dice3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice3Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dice3} className={cx("ui-lucide-icon", className)} {...rest} />
)
