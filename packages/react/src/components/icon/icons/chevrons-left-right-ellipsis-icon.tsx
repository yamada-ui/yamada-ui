import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsLeftRightEllipsis } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChevronsLeftRightEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeftRightEllipsisIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChevronsLeftRightEllipsis}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
