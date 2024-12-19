import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumn } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartColumn}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
