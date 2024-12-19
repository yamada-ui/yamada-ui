import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SearchCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SearchCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SearchCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
