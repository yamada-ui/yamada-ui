import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { HeartOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HeartOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeartOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={HeartOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
