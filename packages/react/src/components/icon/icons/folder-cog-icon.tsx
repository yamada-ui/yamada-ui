import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderCog } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCogIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderCog} className={cx("ui-lucide-icon", className)} {...rest} />
)
