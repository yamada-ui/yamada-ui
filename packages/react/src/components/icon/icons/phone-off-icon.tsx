import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PhoneOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
