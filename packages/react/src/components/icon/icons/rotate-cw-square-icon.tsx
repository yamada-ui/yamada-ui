import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCwSquare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RotateCwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCwSquareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={RotateCwSquare}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
