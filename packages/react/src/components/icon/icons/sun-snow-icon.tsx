import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SunSnow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunSnowIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={SunSnow} className={cx("ui-lucide-icon", className)} {...rest} />
)
