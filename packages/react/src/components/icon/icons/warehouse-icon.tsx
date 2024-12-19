import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Warehouse } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WarehouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WarehouseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Warehouse} className={cx("ui-lucide-icon", className)} {...rest} />
)
