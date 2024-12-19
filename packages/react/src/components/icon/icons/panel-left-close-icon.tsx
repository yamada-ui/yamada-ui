import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftClose } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelLeftCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftCloseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelLeftClose}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
