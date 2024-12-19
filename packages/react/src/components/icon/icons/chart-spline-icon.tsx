import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartSpline } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartSplineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartSplineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartSpline}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
