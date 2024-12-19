import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TableColumnsSplit } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TableColumnsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableColumnsSplitIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={TableColumnsSplit}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
