import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TableCellsSplit } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TableCellsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableCellsSplitIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TableCellsSplit}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
