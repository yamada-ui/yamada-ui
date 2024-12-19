import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesColumnDecreasing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartNoAxesColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnDecreasingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartNoAxesColumnDecreasing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
