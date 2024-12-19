import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CloudSnow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudSnowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CloudSnow} className={cx("ui-lucide-icon", className)} {...rest} />
)
