import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileType } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileTypeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileType} className={cx("ui-lucide-icon", className)} {...rest} />
)
