import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BellOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BellOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BellOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
