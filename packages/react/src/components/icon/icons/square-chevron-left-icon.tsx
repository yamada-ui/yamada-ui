import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronLeft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronLeftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareChevronLeft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
