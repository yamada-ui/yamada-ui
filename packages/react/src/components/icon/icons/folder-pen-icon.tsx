import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderPen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderPen} className={cx("ui-lucide-icon", className)} {...rest} />
)
