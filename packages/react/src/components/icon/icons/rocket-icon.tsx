import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Rocket } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RocketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RocketIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Rocket} className={cx("ui-lucide-icon", className)} {...rest} />
)
