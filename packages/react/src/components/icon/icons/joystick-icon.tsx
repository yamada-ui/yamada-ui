import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Joystick } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `JoystickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const JoystickIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Joystick} className={cx("ui-lucide-icon", className)} {...rest} />
)
