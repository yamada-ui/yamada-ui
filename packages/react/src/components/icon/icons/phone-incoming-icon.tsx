import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneIncoming } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhoneIncomingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIncomingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PhoneIncoming}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
