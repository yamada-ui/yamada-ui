import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Touchpad } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TouchpadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TouchpadIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Touchpad} className={cx("ui-lucide-icon", className)} {...rest} />
)
