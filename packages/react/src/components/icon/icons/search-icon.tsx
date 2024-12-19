import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Search } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Search} className={cx("ui-lucide-icon", className)} {...rest} />
)
