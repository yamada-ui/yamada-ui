import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SearchSlash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SearchSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchSlashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SearchSlash}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
