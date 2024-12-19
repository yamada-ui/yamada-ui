import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottomClose } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelBottomCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomCloseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelBottomClose}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
