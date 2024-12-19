import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareParkingOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareParkingOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareParkingOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareParkingOff}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
