import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Tablets } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TabletsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TabletsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Tablets} className={cx("ui-lucide-icon", className)} {...rest} />
)
