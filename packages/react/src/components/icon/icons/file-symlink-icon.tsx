import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileSymlink } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileSymlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSymlinkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileSymlink}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
