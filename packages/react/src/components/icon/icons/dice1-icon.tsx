import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dice1 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Dice1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice1Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dice1} className={cx("ui-lucide-icon", className)} {...rest} />
)
