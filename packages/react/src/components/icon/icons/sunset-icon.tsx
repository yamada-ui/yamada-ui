import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Sunset } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SunsetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunsetIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Sunset} className={cx("ui-lucide-icon", className)} {...rest} />
)
