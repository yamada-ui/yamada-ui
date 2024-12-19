import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SearchX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SearchXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SearchX} className={cx("ui-lucide-icon", className)} {...rest} />
)
