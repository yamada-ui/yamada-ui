import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListCollapse } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListCollapseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCollapseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ListCollapse}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
