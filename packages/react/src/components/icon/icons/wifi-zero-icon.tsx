import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WifiZero } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WifiZeroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiZeroIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WifiZero} className={cx("ui-lucide-icon", className)} {...rest} />
)
