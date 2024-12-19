import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDivide } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareDivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareDivideIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareDivide}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
