import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowDownLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
