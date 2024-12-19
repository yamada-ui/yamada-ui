import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={MapPinX} className={cx("ui-lucide-icon", className)} {...rest} />
)
