import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HopOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HopOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HopOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HopOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
