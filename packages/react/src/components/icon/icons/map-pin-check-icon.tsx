import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MapPinCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
