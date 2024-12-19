import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dice6 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Dice6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dice6Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dice6} className={cx("ui-lucide-icon", className)} {...rest} />
)
