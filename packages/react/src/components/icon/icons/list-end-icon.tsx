import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListEndIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListEnd} className={cx("ui-lucide-icon", className)} {...rest} />
)
