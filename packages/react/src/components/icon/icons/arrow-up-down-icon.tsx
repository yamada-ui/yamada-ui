import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ArrowUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ArrowUpDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
