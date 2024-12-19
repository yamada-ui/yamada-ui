import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ServerOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ServerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ServerOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
