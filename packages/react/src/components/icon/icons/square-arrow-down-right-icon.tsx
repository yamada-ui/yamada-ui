import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowDownRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowDownRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
