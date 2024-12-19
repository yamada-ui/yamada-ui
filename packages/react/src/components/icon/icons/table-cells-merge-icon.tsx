import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TableCellsMerge } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TableCellsMergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableCellsMergeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TableCellsMerge}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
