import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareFunction } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareFunctionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareFunctionIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareFunction}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
