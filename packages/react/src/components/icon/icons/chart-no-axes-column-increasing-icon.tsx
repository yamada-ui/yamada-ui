import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesColumnIncreasing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartNoAxesColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnIncreasingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartNoAxesColumnIncreasing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
