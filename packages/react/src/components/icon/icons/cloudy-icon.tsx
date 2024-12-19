import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cloudy } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CloudyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cloudy} className={cx("ui-lucide-icon", className)} {...rest} />
)
