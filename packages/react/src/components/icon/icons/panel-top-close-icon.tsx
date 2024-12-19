import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTopClose } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelTopCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopCloseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelTopClose}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
