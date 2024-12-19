import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileChartColumn } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileChartColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumnIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileChartColumn}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
