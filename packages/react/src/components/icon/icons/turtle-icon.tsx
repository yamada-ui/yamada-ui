import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Turtle } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TurtleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TurtleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Turtle} className={cx("ui-lucide-icon", className)} {...rest} />
)
