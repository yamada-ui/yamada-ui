import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTopOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelTopOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PanelTopOpen}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
