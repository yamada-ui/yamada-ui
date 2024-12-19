import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListOrdered } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListOrderedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListOrderedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ListOrdered}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
