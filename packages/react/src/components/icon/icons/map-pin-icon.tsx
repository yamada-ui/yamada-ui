import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPin } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MapPin} className={cx("ui-lucide-icon", className)} {...rest} />
)
