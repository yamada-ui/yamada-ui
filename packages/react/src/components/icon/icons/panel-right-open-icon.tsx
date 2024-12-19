import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRightOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelRightOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelRightOpen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
