import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dice4 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Dice4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice4Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dice4} className={cx("ui-lucide-icon", className)} {...rest} />
)
