import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareSquare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
