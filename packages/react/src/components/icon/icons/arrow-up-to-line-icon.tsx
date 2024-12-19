import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpToLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpToLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowUpToLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
