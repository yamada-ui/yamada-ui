import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListFilter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListFilterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListFilterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListFilter} className={cx("ui-lucide-icon", className)} {...rest} />
)
