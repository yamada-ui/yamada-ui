import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SignalLow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SignalLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalLowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SignalLow} className={cx("ui-lucide-icon", className)} {...rest} />
)
