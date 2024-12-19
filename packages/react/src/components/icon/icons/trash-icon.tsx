import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Trash } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TrashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrashIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Trash} className={cx("ui-lucide-icon", className)} {...rest} />
)
