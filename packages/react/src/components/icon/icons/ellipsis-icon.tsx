import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ellipsis } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EllipsisIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ellipsis} className={cx("ui-lucide-icon", className)} {...rest} />
)
