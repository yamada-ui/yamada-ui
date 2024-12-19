import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelLeftOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelLeftOpen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
