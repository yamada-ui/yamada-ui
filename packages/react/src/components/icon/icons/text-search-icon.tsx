import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TextSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TextSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TextSearch} className={cx("ui-lucide-icon", className)} {...rest} />
)
