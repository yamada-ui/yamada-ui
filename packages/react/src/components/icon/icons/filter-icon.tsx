import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Filter } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FilterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilterIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Filter} className={cx("ui-lucide-icon", className)} {...rest} />
)
