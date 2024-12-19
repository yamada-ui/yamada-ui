import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Fuel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FuelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FuelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Fuel} className={cx("ui-lucide-icon", className)} {...rest} />
)
