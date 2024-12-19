import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
