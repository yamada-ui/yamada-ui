import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleParkingOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleParkingOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleParkingOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={CircleParkingOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
