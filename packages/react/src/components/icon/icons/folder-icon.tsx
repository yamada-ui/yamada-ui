import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Folder } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Folder} className={cx("ui-lucide-icon", className)} {...rest} />
)
