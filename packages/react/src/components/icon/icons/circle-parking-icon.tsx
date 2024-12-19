import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleParking } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleParkingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParkingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleParking}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
