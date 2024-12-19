import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronRight } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronRightIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={SquareChevronRight}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
