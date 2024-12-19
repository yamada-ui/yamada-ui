import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderCode } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCodeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderCode} className={cx("ui-lucide-icon", className)} {...rest} />
)
