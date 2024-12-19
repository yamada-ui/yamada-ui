import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderDown} className={cx("ui-lucide-icon", className)} {...rest} />
)
