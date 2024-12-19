import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClockArrowDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClockArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClockArrowDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
