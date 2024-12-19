import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Kanban } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `KanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const KanbanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Kanban} className={cx("ui-lucide-icon", className)} {...rest} />
)
