import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderPlus} className={cx("ui-lucide-icon", className)} {...rest} />
)
