import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderOutput } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderOutputIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOutputIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderOutput}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
