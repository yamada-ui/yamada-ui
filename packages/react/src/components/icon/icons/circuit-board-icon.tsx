import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircuitBoard } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircuitBoardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircuitBoardIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircuitBoard}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
