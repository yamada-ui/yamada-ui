import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneCall } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhoneCallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneCallIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PhoneCall} className={cx("ui-lucide-icon", className)} {...rest} />
)
