import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareArrowDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
