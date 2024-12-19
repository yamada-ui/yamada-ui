import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderClosed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClosedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderClosed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
