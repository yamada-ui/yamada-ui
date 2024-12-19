import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleEllipsis } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEllipsisIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleEllipsis}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
