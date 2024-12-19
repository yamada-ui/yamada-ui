import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareParking } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareParkingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareParkingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareParking}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
