import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderSymlink } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderSymlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderSymlinkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderSymlink}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
