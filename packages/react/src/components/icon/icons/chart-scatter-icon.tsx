import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartScatter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartScatterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartScatterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartScatter}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)