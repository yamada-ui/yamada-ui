import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SignalZero } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SignalZeroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalZeroIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SignalZero} className={cx("ui-lucide-icon", className)} {...rest} />
)
