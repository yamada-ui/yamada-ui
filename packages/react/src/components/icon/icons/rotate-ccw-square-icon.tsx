import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCcwSquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RotateCcwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcwSquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RotateCcwSquare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
