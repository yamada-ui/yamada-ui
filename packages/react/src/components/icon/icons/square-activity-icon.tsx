import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareActivity } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareActivityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareActivityIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareActivity}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
