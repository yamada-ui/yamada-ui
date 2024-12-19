import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderDot} className={cx("ui-lucide-icon", className)} {...rest} />
)
