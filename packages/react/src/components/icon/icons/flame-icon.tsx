import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Flame } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FlameIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlameIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Flame} className={cx("ui-lucide-icon", className)} {...rest} />
)
