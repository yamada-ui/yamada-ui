import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileSearch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileSearchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FileSearch} className={cx("ui-lucide-icon", className)} {...rest} />
)
