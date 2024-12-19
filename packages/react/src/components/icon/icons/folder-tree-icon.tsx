import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderTree } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderTreeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderTree} className={cx("ui-lucide-icon", className)} {...rest} />
)
