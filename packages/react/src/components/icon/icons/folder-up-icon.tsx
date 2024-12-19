import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
