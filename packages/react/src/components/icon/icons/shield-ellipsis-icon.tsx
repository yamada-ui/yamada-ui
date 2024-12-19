import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldEllipsis } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldEllipsisIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ShieldEllipsis}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
