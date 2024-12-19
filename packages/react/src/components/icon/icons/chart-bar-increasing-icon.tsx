import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarIncreasing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartBarIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarIncreasingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartBarIncreasing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
