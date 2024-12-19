import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Haze } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `HazeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HazeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Haze} className={cx("ui-lucide-icon", className)} {...rest} />
)
