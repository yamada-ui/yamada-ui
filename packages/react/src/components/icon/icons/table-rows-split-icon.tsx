import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TableRowsSplit } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TableRowsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableRowsSplitIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TableRowsSplit}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
