import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareArrowUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
