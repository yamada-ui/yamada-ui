import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ListStart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ListStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListStartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ListStart} className={cx("ui-lucide-icon", className)} {...rest} />
)
