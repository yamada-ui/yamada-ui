import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleEllipsis } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RectangleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleEllipsisIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={RectangleEllipsis}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
