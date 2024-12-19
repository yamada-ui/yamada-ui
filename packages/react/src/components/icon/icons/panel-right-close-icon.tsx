import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRightClose } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelRightCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightCloseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelRightClose}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
