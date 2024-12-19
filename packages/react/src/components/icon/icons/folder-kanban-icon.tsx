import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderKanban } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKanbanIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderKanban}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
