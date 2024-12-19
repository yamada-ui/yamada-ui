import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SatelliteDish } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SatelliteDishIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SatelliteDishIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SatelliteDish}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
