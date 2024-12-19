import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { File } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={File} className={cx("ui-lucide-icon", className)} {...rest} />
)
