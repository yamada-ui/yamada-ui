import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileKey } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileKeyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileKey} className={cx("ui-lucide-icon", className)} {...rest} />
)
