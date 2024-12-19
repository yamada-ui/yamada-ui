import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Hourglass } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HourglassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HourglassIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Hourglass} className={cx("ui-lucide-icon", className)} {...rest} />
)
