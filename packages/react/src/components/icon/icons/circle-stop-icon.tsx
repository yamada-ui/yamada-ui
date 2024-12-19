import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CircleStop } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CircleStopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleStopIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CircleStop} className={cx("ui-lucide-icon", className)} {...rest} />
)
