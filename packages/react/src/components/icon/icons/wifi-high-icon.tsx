import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { WifiHigh } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WifiHighIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WifiHighIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={WifiHigh} className={cx("ui-lucide-icon", className)} {...rest} />
)
