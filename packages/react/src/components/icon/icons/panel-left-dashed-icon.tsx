import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftDashed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelLeftDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftDashedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelLeftDashed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
