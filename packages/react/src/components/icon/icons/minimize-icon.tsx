import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Minimize } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MinimizeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MinimizeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Minimize} className={cx("ui-lucide-icon", className)} {...rest} />
)
