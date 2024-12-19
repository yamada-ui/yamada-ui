import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hotel } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HotelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HotelIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hotel} className={cx("ui-lucide-icon", className)} {...rest} />
)
