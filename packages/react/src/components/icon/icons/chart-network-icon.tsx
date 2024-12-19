import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNetwork } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartNetworkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNetworkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartNetwork}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
