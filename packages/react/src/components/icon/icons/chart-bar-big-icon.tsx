import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarBig } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartBarBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarBigIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartBarBig}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
