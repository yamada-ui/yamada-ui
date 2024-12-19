import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WineOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WineOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WineOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WineOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
