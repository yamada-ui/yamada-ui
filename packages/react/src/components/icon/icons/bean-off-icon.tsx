import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BeanOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BeanOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeanOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BeanOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
