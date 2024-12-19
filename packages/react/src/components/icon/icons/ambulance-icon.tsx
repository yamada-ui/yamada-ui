import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Ambulance } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AmbulanceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AmbulanceIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Ambulance} className={cx("ui-lucide-icon", className)} {...rest} />
)
