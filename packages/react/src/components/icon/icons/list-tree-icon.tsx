import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListTree } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListTreeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListTree} className={cx("ui-lucide-icon", className)} {...rest} />
)
