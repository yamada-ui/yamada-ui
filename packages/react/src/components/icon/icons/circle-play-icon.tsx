import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePlay } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CirclePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePlayIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={CirclePlay} className={cx("ui-lucide-icon", className)} {...rest} />
)
