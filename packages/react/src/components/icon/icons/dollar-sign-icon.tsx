import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { DollarSign } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DollarSignIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={DollarSign} className={cx("ui-lucide-icon", className)} {...rest} />
)
