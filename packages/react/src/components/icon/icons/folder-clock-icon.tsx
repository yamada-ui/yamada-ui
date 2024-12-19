import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderClock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderClockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderClock}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
