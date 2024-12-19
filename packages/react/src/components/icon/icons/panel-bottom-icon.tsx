import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottom } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelBottom}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
