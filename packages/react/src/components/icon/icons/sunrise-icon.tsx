import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sunrise } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunriseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunriseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sunrise} className={cx("ui-lucide-icon", className)} {...rest} />
)
