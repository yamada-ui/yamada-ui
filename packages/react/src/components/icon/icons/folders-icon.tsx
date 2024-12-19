import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Folders } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FoldersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FoldersIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Folders} className={cx("ui-lucide-icon", className)} {...rest} />
)
