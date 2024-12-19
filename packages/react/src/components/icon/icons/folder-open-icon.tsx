import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderOpen } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOpenIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderOpen} className={cx("ui-lucide-icon", className)} {...rest} />
)
