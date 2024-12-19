import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Gamepad } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GamepadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GamepadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Gamepad} className={cx("ui-lucide-icon", className)} {...rest} />
)
