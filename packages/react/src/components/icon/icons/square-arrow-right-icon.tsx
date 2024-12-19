import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowRightIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareArrowRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
