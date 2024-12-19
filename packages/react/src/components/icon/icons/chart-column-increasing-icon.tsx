import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnIncreasing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnIncreasingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartColumnIncreasing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
