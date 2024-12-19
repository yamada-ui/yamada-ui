import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WifiOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WifiOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WifiOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
