import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AirVent } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AirVentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AirVentIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AirVent} className={cx("ui-lucide-icon", className)} {...rest} />
)
