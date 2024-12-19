import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareMinus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMinusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareMinus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
