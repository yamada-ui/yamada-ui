import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Group } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GroupIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Group} className={cx("ui-lucide-icon", className)} {...rest} />
)
