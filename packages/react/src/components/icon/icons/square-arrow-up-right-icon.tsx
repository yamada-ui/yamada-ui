import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowUpRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowUpRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
