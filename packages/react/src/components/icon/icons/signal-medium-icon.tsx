import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SignalMedium } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SignalMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignalMediumIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SignalMedium}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
