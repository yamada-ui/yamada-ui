import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Airplay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AirplayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AirplayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Airplay} className={cx("ui-lucide-icon", className)} {...rest} />
)
