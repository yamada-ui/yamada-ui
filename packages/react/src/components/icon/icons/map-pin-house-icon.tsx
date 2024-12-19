import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinHouse } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinHouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinHouseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MapPinHouse}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
