import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesColumn } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartNoAxesColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesColumnIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={ChartNoAxesColumn}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
