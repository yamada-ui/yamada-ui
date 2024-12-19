import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GripVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GripVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripVerticalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={GripVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
