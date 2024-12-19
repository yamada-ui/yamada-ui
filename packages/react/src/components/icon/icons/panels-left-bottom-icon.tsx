import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelsLeftBottom } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelsLeftBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsLeftBottomIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelsLeftBottom}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
