import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutPanelLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LayoutPanelLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelLeftIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LayoutPanelLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
