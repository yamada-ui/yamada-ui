import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BellMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BellMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BellMinus} className={cx("ui-lucide-icon", className)} {...rest} />
)
