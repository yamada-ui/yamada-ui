import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderLock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderLockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderLock} className={cx("ui-lucide-icon", className)} {...rest} />
)
