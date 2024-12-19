import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnDecreasing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnDecreasingIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartColumnDecreasing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
