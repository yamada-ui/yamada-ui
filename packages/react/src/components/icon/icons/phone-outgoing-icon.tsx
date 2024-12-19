import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneOutgoing } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PhoneOutgoingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOutgoingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PhoneOutgoing}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
