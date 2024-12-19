import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Martini } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MartiniIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MartiniIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Martini} className={cx("ui-lucide-icon", className)} {...rest} />
)
