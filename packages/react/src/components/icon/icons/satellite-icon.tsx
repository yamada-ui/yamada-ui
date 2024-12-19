import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Satellite } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SatelliteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SatelliteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Satellite} className={cx("ui-lucide-icon", className)} {...rest} />
)
