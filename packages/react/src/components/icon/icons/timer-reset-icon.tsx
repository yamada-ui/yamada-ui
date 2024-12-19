import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TimerReset } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TimerResetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerResetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TimerReset} className={cx("ui-lucide-icon", className)} {...rest} />
)
