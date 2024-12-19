import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Clock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Clock} className={cx("ui-lucide-icon", className)} {...rest} />
)
