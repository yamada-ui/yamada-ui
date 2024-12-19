import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Server } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ServerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Server} className={cx("ui-lucide-icon", className)} {...rest} />
)
