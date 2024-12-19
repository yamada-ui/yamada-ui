import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Map } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Map} className={cx("ui-lucide-icon", className)} {...rest} />
)
