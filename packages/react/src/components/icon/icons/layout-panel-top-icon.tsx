import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutPanelTop } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LayoutPanelTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelTopIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={LayoutPanelTop}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
