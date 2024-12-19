import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderArchive } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderArchiveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderArchive}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
