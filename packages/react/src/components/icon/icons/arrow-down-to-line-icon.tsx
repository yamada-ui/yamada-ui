import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownToLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowDownToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownToLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowDownToLine}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
