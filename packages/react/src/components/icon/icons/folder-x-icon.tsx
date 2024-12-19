import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderX} className={cx("ui-lucide-icon", className)} {...rest} />
)
