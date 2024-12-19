import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { List } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={List} className={cx("ui-lucide-icon", className)} {...rest} />
)
