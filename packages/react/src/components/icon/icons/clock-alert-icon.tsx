import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClockAlert } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClockAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockAlertIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ClockAlert} className={cx("ui-lucide-icon", className)} {...rest} />
)
