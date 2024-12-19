import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Dices } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DicesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DicesIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Dices} className={cx("ui-lucide-icon", className)} {...rest} />
)
