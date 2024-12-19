import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ServerCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ServerCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ServerCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ServerCog} className={cx("ui-lucide-icon", className)} {...rest} />
)
