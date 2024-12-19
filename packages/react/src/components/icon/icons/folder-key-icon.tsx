import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderKey } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKeyIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={FolderKey} className={cx("ui-lucide-icon", className)} {...rest} />
)
