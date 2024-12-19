import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutUpRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutUpRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowOutUpRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
