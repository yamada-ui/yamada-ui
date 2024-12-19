import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutDownLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareArrowOutDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareArrowOutDownLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
