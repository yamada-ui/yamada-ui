import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarDecreasing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartBarDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarDecreasingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartBarDecreasing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
