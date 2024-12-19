import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderRoot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderRootIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderRootIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderRoot} className={cx("ui-lucide-icon", className)} {...rest} />
)
