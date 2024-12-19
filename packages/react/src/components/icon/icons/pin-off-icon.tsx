import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PinOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PinOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PinOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PinOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
