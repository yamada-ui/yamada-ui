import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Bike } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BikeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BikeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Bike} className={cx("ui-lucide-icon", className)} {...rest} />
)
