import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FilterX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FilterXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilterXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FilterX} className={cx("ui-lucide-icon", className)} {...rest} />
)
