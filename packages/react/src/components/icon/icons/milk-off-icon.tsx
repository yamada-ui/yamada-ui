import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MilkOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MilkOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MilkOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MilkOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
