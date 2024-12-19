import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderOpenDot } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderOpenDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOpenDotIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderOpenDot}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
