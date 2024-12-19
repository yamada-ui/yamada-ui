import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GripHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GripHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripHorizontalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={GripHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
