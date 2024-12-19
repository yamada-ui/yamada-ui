import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeDollarSign } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeDollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeDollarSignIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={BadgeDollarSign}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
