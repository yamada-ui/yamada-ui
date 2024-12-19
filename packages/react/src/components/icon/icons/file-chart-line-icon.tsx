import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileChartLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileChartLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileChartLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
