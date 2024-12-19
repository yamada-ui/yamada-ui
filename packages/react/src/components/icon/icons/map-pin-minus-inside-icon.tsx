import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinMinusInside } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MapPinMinusInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinMinusInsideIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={MapPinMinusInside}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
