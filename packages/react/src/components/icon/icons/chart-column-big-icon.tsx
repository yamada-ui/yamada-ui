import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnBig } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartColumnBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnBigIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartColumnBig}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
