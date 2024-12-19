import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudCog} className={cx("ui-lucide-icon", className)} {...rest} />
)
