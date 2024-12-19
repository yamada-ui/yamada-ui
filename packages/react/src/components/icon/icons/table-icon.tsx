import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Table } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Table} className={cx("ui-lucide-icon", className)} {...rest} />
)
