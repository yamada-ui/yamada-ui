import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutDownRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowOutDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowOutDownRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
