import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRightDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelRightDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightDashedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelRightDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
