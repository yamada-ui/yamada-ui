import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PowerOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PowerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PowerOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={PowerOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
