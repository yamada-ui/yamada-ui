import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileBadge } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileBadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBadgeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileBadge} className={cx("ui-lucide-icon", className)} {...rest} />
)
