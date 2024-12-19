import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDollarSign } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleDollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleDollarSignIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleDollarSign}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
