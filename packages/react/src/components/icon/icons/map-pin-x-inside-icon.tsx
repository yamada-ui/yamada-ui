import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinXInside } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinXInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinXInsideIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MapPinXInside}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
