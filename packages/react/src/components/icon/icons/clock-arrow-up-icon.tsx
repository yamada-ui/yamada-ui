import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClockArrowUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClockArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClockArrowUp}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
