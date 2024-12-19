import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FolderCheck } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FolderCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderCheckIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FolderCheck}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
