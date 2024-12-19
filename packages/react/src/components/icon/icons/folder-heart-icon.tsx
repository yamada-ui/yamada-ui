import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderHeart } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderHeartIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderHeart}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
